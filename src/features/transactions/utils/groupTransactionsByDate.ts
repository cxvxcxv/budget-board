import type { ITransaction } from '../../../types/transaction.types';

export function groupTransactionsByDate(transactions: ITransaction[]) {
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
  ).sort(([a], [b]) => new Date(b).getTime() - new Date(a).getTime());

  return grouped;
}
