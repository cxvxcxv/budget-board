import type { ITransaction } from '../../../types/transaction.types';
import { groupTransactionsByDate } from '../utils/groupTransactionsByDate';
import { TransactionItem } from './TransactionItem';

type TTransactionListGroupedProps = {
  transactions: ITransaction[];
};

export const TransactionListGrouped = ({
  transactions,
}: TTransactionListGroupedProps) => {
  const grouped = groupTransactionsByDate(transactions).sort(
    ([a], [b]) => new Date(b).getTime() - new Date(a).getTime(),
  );

  if (!grouped.length) return <p>No transactions found</p>;

  return (
    <>
      {grouped.map(([date, txs]) => (
        <div key={date} className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-200">{date}</h3>
          <div className="divide-y divide-white/5 overflow-hidden rounded-lg bg-white/5">
            {txs.map(tx => (
              <TransactionItem key={tx.id} transaction={tx} showDate={false} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
