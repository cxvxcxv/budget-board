import type {
  ITransaction,
  ITransactionFiltersState,
} from '../../../types/transaction.types';

export function filterTransactions(
  transactions: ITransaction[],
  filters: ITransactionFiltersState,
) {
  const filteredTransactions = transactions.filter(transaction => {
    const matchType =
      filters.type === 'all' || transaction.type === filters.type;
    const matchCategory =
      !filters.category || transaction.category === filters.category;
    const matchStart =
      !filters.startDate || transaction.date >= filters.startDate;
    const matchEnd = !filters.endDate || transaction.date <= filters.endDate;
    return (
      matchType && matchCategory && matchCategory && matchStart && matchEnd
    );
  });

  return filteredTransactions;
}
