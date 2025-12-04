import { TransactionItemButton } from './TransactionItemButton';
import type { IHydratedTransaction } from '@/entities';

type TTransactionListFlatProps = {
  transactions: IHydratedTransaction[];
  onEditTransaction: (transaction: IHydratedTransaction) => void;
};

export const TransactionListFlat = ({
  transactions,
  onEditTransaction,
}: TTransactionListFlatProps) => {
  if (!transactions.length)
    return <p className="text-gray-400">No transactions found.</p>;

  return (
    <div className="divide-y divide-white/5 overflow-hidden rounded-lg bg-white/5">
      {transactions.map(tx => (
        <TransactionItemButton
          title="Click to edit"
          key={tx.id}
          transaction={tx}
          onClick={() => onEditTransaction(tx)}
        />
      ))}
    </div>
  );
};
