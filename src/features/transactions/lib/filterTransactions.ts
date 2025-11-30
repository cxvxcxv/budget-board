import type {
  IHydratedTransaction,
  ITransactionFiltersState,
} from '@/entities';

export function filterTransactions(
  transactions: IHydratedTransaction[],
  filters: ITransactionFiltersState,
) {
  const filteredTransactions = transactions.filter(transaction => {
    const matchType =
      filters.type === 'all' || transaction.type === filters.type;
    const matchCategory =
      !filters.categoryName ||
      transaction.categoryName === filters.categoryName;
    const matchStart =
      !filters.startDate || transaction.date >= filters.startDate;
    const matchEnd = !filters.endDate || transaction.date <= filters.endDate;
    return (
      matchType && matchCategory && matchCategory && matchStart && matchEnd
    );
  });

  return filteredTransactions;
}
