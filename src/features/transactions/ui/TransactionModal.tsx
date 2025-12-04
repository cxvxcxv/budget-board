import { TransactionForm } from './TransactionForm';
import type { IHydratedTransaction } from '@/entities';
import { Modal } from '@/shared/ui';

type TTransactionModalProps = {
  transaction?: IHydratedTransaction;
  isOpen: boolean;
  onClose: () => void;
};

export const TransactionModal = ({
  transaction,
  isOpen,
  onClose,
}: TTransactionModalProps) => {
  return (
    <Modal
      title={transaction ? 'Edit transaction' : 'New transaction'}
      show={isOpen}
      onClose={onClose}
    >
      <TransactionForm transaction={transaction} onClose={onClose} />
    </Modal>
  );
};
