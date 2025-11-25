import { useState } from 'react';
import type { ICategory } from '@/entities';
import { CategoriesList, CategoryModal } from '@/features/categories';
import { Button } from '@/shared/ui';

export const Categories = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCategory, setModalCategory] = useState<ICategory>();

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalCategory({} as ICategory);
  };

  const handleAddCategory = () => {
    setIsModalOpen(true);
  };

  const handleEditCategory = (category: ICategory) => {
    setModalCategory(category);
    setIsModalOpen(true);
  };

  return (
    <section>
      <CategoriesList onEditCategory={handleEditCategory} />
      <Button
        className="mt-4 w-full bg-primary hover:bg-indigo-800 active:scale-95"
        onClick={handleAddCategory}
      >
        Add category
      </Button>
      <CategoryModal
        category={modalCategory}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};
