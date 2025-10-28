import type { ITransactionFiltersState } from '../types/transaction.types';

export const initialFiltersState: ITransactionFiltersState = {
  startDate: '',
  endDate: '',
  category: '',
  type: 'all',
};
