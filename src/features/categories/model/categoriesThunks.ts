import { OTHER_CATEGORY } from '../config';
import { removeCategory } from './categoriesSlice';
import type { AppDispatch } from '@/app/store';
import { reassignCategory } from '@/features/transactions';

export const deleteCategoryAndReassign =
  (categoryId: string) => (dispatch: AppDispatch) => {
    if (categoryId === 'other') return;

    dispatch(
      reassignCategory({
        from: categoryId,
        to: OTHER_CATEGORY.id,
      }),
    );

    dispatch(removeCategory(categoryId));
  };
