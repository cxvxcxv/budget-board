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
  // const dispatch = useAppDispatch();

  return (
    <Modal title="Add Transaction" show={isOpen} onClose={onClose}>
      <TransactionForm />
    </Modal>
  );
};
