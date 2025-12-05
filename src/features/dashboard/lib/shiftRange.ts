import type { TDateRange } from '@/entities';

export const shiftDateRange = (
  range: TDateRange,
  direction: 'prev' | 'next',
): TDateRange => {
  const delta = direction === 'next' ? 1 : -1;

  const start = new Date(range.startDate);
  const end = new Date(range.endDate);

  switch (range.type) {
    case 'day':
      start.setDate(start.getDate() + delta);
      end.setDate(end.getDate() + delta);
      break;

    case 'week':
      start.setDate(start.getDate() + delta * 7);
      end.setDate(end.getDate() + delta * 7);
      break;

    case 'month':
      start.setMonth(start.getMonth() + delta);
      end.setMonth(end.getMonth() + delta);
      break;

    case 'year':
      start.setFullYear(start.getFullYear() + delta);
      end.setFullYear(end.getFullYear() + delta);
      break;
  }

  return {
    ...range,
    startDate: start.toISOString(),
    endDate: end.toISOString(),
  };
};
