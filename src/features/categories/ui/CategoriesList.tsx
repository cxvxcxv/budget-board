import { CategoryItemButton } from './CategoryItemButton';
import type { ICategory } from '@/entities';
import { useAppSelector } from '@/shared/hooks';

type TCategoriesListProps = {
  onEditCategory: (category: ICategory) => void;
};

export const CategoriesList = ({ onEditCategory }: TCategoriesListProps) => {
  const categories = useAppSelector(state => state.categories.list);
  return (
    <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {categories.map(category => (
        <CategoryItemButton
          key={category.id}
          category={category}
          onClick={() => onEditCategory(category)}
        />
      ))}
    </section>
  );
};
