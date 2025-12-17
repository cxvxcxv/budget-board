import { removeCategory } from './categoriesSlice';
import type { AppDispatch } from '@/app/store';
import { reassignCategory } from '@/features/transactions/model/transactionsSlice';

export const deleteCategoryAndReassign =
  (categoryId: string) => (dispatch: AppDispatch) => {
    if (categoryId === 'other') return;

    dispatch(
      reassignCategory({
        from: categoryId,
        to: 'other',
      }),
    );

    dispatch(removeCategory(categoryId));
  };
