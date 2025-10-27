import { useMemo, useState } from 'react';
import { useAppSelector } from '../../hooks/useStore';
import { FiltersModal } from './components/FiltersModal';
import { TransactionItem } from './components/TransactionItem';
import { groupTransactionsByDate } from './utils/groupTransactionsByDate';

export const AllTransactions = () => {
  const transactions = useAppSelector(state => state.transactions.list);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // group by date
  const groupedTransactions = useMemo(
    () => groupTransactionsByDate(transactions),
    [transactions],
  );

  if (groupedTransactions.length === 0) return <p>No transactions found.</p>;

  return (
    <section className="space-y-8">
      <button onClick={() => setIsModalOpen(prev => !prev)}>Filter</button>

      {groupedTransactions.map(([date, txs]) => (
        <div key={date} className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-200">{date}</h3>

          <div className="divide-y divide-white/5 overflow-hidden rounded-lg bg-white/5">
            {txs.map(tx => (
              <TransactionItem key={tx.id} transaction={tx} />
            ))}
          </div>
        </div>
      ))}

      <FiltersModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
