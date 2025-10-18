import clsx from 'clsx';
import { useMemo, useState } from 'react';
import { useAppSelector } from '../../hooks/useStore';
import { FiltersModal } from './components/FiltersModal';
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
              <div
                key={tx.id}
                className="flex items-center justify-between px-4 py-3 transition hover:bg-white/10"
              >
                <div className="flex flex-col">
                  <span className="font-medium">{tx.title}</span>
                  <span className="text-sm text-gray-400">{tx.category}</span>
                </div>

                <div
                  className={clsx(
                    'text-right font-semibold',
                    tx.type === 'income' ? 'text-income' : 'text-expense',
                  )}
                >
                  {tx.type === 'income' ? '+' : '-'}${tx.amount.toFixed(2)}
                </div>
              </div>
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
