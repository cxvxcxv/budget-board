import type { ITransaction } from '../../../types/transaction.types';
import { TransactionItem } from './TransactionItem';

type TTransactionListFlatProps = {
  transactions: ITransaction[];
};

export const TransactionListFlat = ({
  transactions,
}: TTransactionListFlatProps) => {
  if (!transactions.length) return <p>No transactions found</p>;

  return (
    <div className="divide-y divide-white/5 overflow-hidden rounded-lg bg-white/5">
      {transactions.map(tx => (
        <TransactionItem key={tx.id} transaction={tx} />
      ))}
    </div>
  );
};
