import type { ITransactionFiltersState } from '../model';

export const initialFiltersState: ITransactionFiltersState = {
  startDate: '',
  endDate: '',
  category: '',
  type: 'all',
};
