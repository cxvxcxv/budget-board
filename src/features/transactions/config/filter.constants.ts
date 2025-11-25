import type { ITransactionFiltersState } from '@/entities';

export const FILTERS_INITIAL_STATE: ITransactionFiltersState = {
  startDate: '',
  endDate: '',
  categoryName: '',
  type: 'all',
};
