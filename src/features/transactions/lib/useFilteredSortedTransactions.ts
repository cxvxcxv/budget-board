import { useMemo } from 'react';
import type {
  ITransaction,
  ITransactionFiltersState,
  TTransactionsSortState,
} from '../model/types';
import { filterTransactions } from './filterTransactions';
import { sortTransactions } from './sortTransactions';

export const useFilteredSortedTransactions = (
  transactions: ITransaction[],
  filters: ITransactionFiltersState,
  sortBy: TTransactionsSortState,
  isReversed: boolean,
) => {
  return useMemo(() => {
    const filtered = filterTransactions(transactions, filters);
    const sorted = sortTransactions(filtered, sortBy);
    return isReversed ? [...sorted].reverse() : sorted;
  }, [transactions, filters, sortBy, isReversed]);
};
