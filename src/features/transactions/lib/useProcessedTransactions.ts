import { useMemo } from 'react';
import { filterTransactions } from './filterTransactions';
import { searchTransactions } from './searchTransactions';
import { sortTransactions } from './sortTransactions';
import type {
  IHydratedTransaction,
  ITransactionFiltersState,
  TTransactionsSortState,
} from '@/entities/transaction.types';

export const useProcessedTransactions = (
  transactions: IHydratedTransaction[],
  filters: ITransactionFiltersState,
  sortBy: TTransactionsSortState,
  searchTerm: string,
  isReversed: boolean,
) => {
  return useMemo(() => {
    const filtered = filterTransactions(transactions, filters);
    const searched = searchTransactions(filtered, searchTerm);
    const sorted = sortTransactions(searched, sortBy);
    return isReversed ? [...sorted].reverse() : sorted;
  }, [transactions, filters, sortBy, searchTerm, isReversed]);
};
