import { useEffect } from 'react';
import { useAppSelector } from './useStore';
import { OTHER_CATEGORY } from '@/features/categories';

export function useInitCategories() {
  const categories = useAppSelector(state => state.categories.list);

  useEffect(() => {
    if (!categories.some(c => c.id === 'other')) {
      const updated = [OTHER_CATEGORY, ...categories];
      localStorage.setItem('categories', JSON.stringify(updated));
    }
  }, [categories]);
}
