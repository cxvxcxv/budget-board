import type { IHydratedTransaction } from '@/entities';

export const searchTransactions = (
  transactions: IHydratedTransaction[],
  searchTerm: string,
) => {
  const searchedTransactions = transactions.filter(
    t =>
      t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.categoryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.note?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return searchedTransactions;
};
