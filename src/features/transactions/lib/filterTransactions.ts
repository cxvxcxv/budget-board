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

    // parse dates as numbers to avoid string comparison issues
    const txTime = new Date(transaction.date).getTime();
    const startTime = filters.startDate
      ? new Date(filters.startDate).getTime()
      : null;
    const endTime = filters.endDate
      ? new Date(filters.endDate).getTime()
      : null;

    const matchStart = !startTime || txTime >= startTime;
    const matchEnd = !endTime || txTime <= endTime;

    return matchType && matchCategory && matchStart && matchEnd;
  });

  return filteredTransactions;
}
