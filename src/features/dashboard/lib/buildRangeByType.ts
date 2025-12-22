import type { TDateRange, TDateRangeType } from '@/entities';

const startOfDay = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate());

const endOfDay = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);

export const buildRangeByType = (
  type: TDateRangeType,
  baseDate = new Date(),
): TDateRange => {
  const start = new Date(baseDate);
  const end = new Date(baseDate);

  switch (type) {
    case 'day':
      return {
        type,
        startDate: startOfDay(start).toISOString(),
        endDate: endOfDay(end).toISOString(),
      };

    case 'week': {
      const day = start.getDay() || 7;
      start.setDate(start.getDate() - day + 1);
      end.setDate(start.getDate() + 6);
      return {
        type,
        startDate: startOfDay(start).toISOString(),
        endDate: endOfDay(end).toISOString(),
      };
    }

    case 'month': {
      start.setDate(1);
      end.setMonth(end.getMonth() + 1, 0);
      return {
        type,
        startDate: startOfDay(start).toISOString(),
        endDate: endOfDay(end).toISOString(),
      };
    }

    case 'year': {
      start.setMonth(0, 1);
      end.setMonth(11, 31);
      return {
        type,
        startDate: startOfDay(start).toISOString(),
        endDate: endOfDay(end).toISOString(),
      };
    }
  }
};
