import { TransactionItem } from './TransactionItem';
import type { IHydratedTransaction } from '@/entities';

type TTransactionListFlatProps = { transactions: IHydratedTransaction[] };

export const TransactionListFlat = ({
  transactions,
}: TTransactionListFlatProps) => {
  if (!transactions.length)
    return <p className="text-gray-400">No transactions found.</p>;

  return (
    <div className="divide-y divide-white/5 overflow-hidden rounded-lg bg-white/5">
      {transactions.map(tx => (
        <TransactionItem key={tx.id} transaction={tx} />
      ))}
    </div>
  );
};
