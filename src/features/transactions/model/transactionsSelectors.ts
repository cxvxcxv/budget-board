import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@/app/store';

export const selectHydratedTransactions = createSelector(
  [
    (state: RootState) => state.transactions.list,
    (state: RootState) => state.categories.list,
  ],
  (transactions, categories) => {
    const map = new Map(categories.map(c => [c.id, c]));

    return transactions.map(t => {
      const category = map.get(t.categoryId);

      return {
        ...t,
        categoryName: category?.name ?? '',
        categoryColorValue: category?.colorValue ?? '',
        categoryIconKey: category?.iconKey ?? '',
      };
    });
  },
);
