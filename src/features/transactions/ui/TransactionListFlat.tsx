import type { ITransaction } from '../model/types';
import { TransactionItem } from './TransactionItem';

type Props = { transactions: ITransaction[] };

export const TransactionListFlat = ({ transactions }: Props) => {
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
