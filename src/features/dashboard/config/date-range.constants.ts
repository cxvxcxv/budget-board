import type { TDateRange } from '@/entities';

const now = new Date();

export const INITIAL_DATE_RANGE: TDateRange = {
  type: 'month',
  startDate: new Date(now.getFullYear(), now.getMonth(), 1).toISOString(),
  endDate: new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0,
    23,
    59,
    59,
  ).toISOString(),
};
