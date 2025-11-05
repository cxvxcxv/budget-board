import { useMemo } from 'react';
import { groupTransactionsByDate } from '../lib/groupTransactionsByDate';
import type { ITransaction } from '../model/types';
import { TransactionItem } from './TransactionItem';

type Props = {
  transactions: ITransaction[];
  isReversed: boolean;
};

export const TransactionListGrouped = ({ transactions, isReversed }: Props) => {
  const grouped = useMemo(
    () => groupTransactionsByDate(transactions, isReversed),
    [transactions, isReversed],
  );

  if (!grouped.length)
    return <p className="text-gray-400">No transactions found.</p>;

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
