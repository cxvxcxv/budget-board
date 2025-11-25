import { CategoryForm } from './CategoryForm';
import type { ICategory } from '@/entities';
import { Modal } from '@/shared/ui';

type TCategoryModalProps = {
  category?: ICategory;
  isOpen: boolean;
  onClose: () => void;
};

export const CategoryModal = ({
  category,
  isOpen,
  onClose,
}: TCategoryModalProps) => {
  return (
    <Modal
      title={category ? 'Edit category' : 'New category'}
      show={isOpen}
      onClose={onClose}
    >
      <CategoryForm category={category} onClose={onClose} />
    </Modal>
  );
};
