import { TransactionForm } from './TransactionForm';
import { Modal } from '@/shared/ui/Modal';

type TAddTransactionModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const AddTransactionModal = ({
  isOpen,
  onClose,
}: TAddTransactionModalProps) => {
  return (
    <Modal title="Add Transaction" show={isOpen} onClose={onClose}>
      <TransactionForm onClose={onClose} />
    </Modal>
  );
};
