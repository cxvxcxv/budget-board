import type {
  ITransaction,
  TTransactionsSortState,
} from '../../../types/transaction.types';

export const sortTransactions = (
  transactions: ITransaction[],
  sortBy: TTransactionsSortState,
) => {
  // avoid mutating redux state
  const sorted = [...transactions];

  if (sortBy === 'amount') {
    sorted.sort((a, b) => {
      // income before expense
      if (a.type !== b.type) return a.type === 'income' ? -1 : 1;

      // same type: higher incomes first, higher expenses last
      const multiplier = a.type === 'income' ? -1 : 1;
      return (a.amount - b.amount) * multiplier;
    });
  } else {
    sorted.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  }

  return sorted;
};
