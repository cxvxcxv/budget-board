import { useState } from 'react';
import type { ICategory } from '@/entities';
import { CategoriesList, CategoryModal } from '@/features/categories';

export const Categories = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCategory, setModalCategory] = useState<ICategory>(
    {} as ICategory,
  );

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalCategory({} as ICategory);
  };

  const handleEditCategory = (category: ICategory) => {
    setModalCategory(category);
    setIsModalOpen(true);
  };

  return (
    <section>
      <CategoriesList onEditCategory={handleEditCategory} />
      <CategoryModal
        category={modalCategory}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};
