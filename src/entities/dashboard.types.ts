export type TDateRangeType = 'day' | 'week' | 'month' | 'year';

export type TDateRange = {
  type: TDateRangeType;
  startDate: string;
  endDate: string;
};
