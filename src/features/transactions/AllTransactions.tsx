import clsx from 'clsx';
import { useAppSelector } from '../../hooks/useStore';

export const AllTransactions = () => {
  const transactions = useAppSelector(state => state.transactions.list);

  return (
    <section>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-white/10 text-sm text-gray-300">
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2 text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length === 0 ? (
            <tr>
              <td colSpan={4} className="px-4 py-6 text-center text-gray-400">
                No transactions yet.
              </td>
            </tr>
          ) : (
            transactions.map(tx => (
              <tr
                key={tx.id}
                className="border-b border-white/5 transition hover:bg-white/5"
              >
                <td className="px-4 py-2">{tx.date}</td>
                <td className="px-4 py-2">{tx.category}</td>
                <td className="px-4 py-2">{tx.title}</td>
                <td
                  className={clsx(
                    'px-4 py-2 text-right font-medium',
                    tx.type === 'income' ? 'text-income' : 'text-expense',
                  )}
                >
                  {tx.type === 'income' ? '+' : '-'}${tx.amount.toFixed(2)}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  );
};
