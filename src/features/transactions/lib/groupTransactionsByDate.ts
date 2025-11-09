import type { ITransaction } from '../../../entities/transaction.types';

export function groupTransactionsByDate(
  transactions: ITransaction[],
  isReversed = false,
) {
  const map = transactions.reduce((acc: Record<string, ITransaction[]>, tx) => {
    const date = new Date(tx.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
    if (!acc[date]) acc[date] = [];
    acc[date].push(tx);
    return acc;
  }, {});

  const entries = Object.entries(map);

  entries.sort(([a], [b]) =>
    isReversed
      ? new Date(a).getTime() - new Date(b).getTime()
      : new Date(b).getTime() - new Date(a).getTime(),
  );

  return entries;
}
