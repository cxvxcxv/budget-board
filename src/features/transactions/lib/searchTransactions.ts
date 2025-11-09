import type { ITransaction } from '@/entities/transaction.types';

export const searchTransactions = (
  transactions: ITransaction[],
  searchTerm: string,
) => {
  const searchedTransactions = transactions.filter(
    t =>
      t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.note?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return searchedTransactions;
};
