import type { ITransaction } from '../../../types/transaction.types';

export function groupTransactionsByDate(
  transactions: ITransaction[],
  isReversed = false,
) {
  const grouped = Object.entries(
    transactions.reduce((acc: Record<string, ITransaction[]>, tx) => {
      const date = new Date(tx.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
      if (!acc[date]) acc[date] = [];
      acc[date].push(tx);
      return acc;
    }, {}),
  ).sort(
    ([a], [b]) =>
      isReversed
        ? new Date(a).getTime() - new Date(b).getTime() // ascending
        : new Date(b).getTime() - new Date(a).getTime(), // descending
  );

  return grouped;
}
