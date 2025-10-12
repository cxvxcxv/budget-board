import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';
import { useAppSelector } from '../../../hooks/useStore';
import type { ITransaction } from '../../../types/transaction.types';

export const RecentTransactions: React.FC = () => {
  const transactions = useAppSelector(state => state.transactions.list);

  const recentTransactions = [...transactions]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  if (!transactions || transactions.length === 0) {
    return (
      <GlassCard className="p-6 text-center text-gray-400">
        No transactions yet. Add your first one!
      </GlassCard>
    );
  }

  return (
    <GlassCard className="h-full p-6">
      <h2 className="mb-4 text-xl font-bold text-primary">
        Recent Transactions
      </h2>
      <ul className="scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent max-h-64 space-y-3 overflow-y-auto">
        {recentTransactions.map((transaction: ITransaction) => (
          <li
            key={transaction.id}
            className="flex items-center justify-between rounded-xl border border-border bg-black/20 px-4 py-2 backdrop-blur-lg"
          >
            <div>
              <h3 className="font-medium text-gray-100">{transaction.title}</h3>
              <p className="text-sm text-gray-400">{transaction.category}</p>
            </div>
            <div
              className={`font-semibold ${
                transaction.type === 'income'
                  ? 'text-green-400'
                  : 'text-red-400'
              }`}
            >
              {transaction.type === 'income' ? '+' : '-'}${transaction.amount}
            </div>
          </li>
        ))}
      </ul>
    </GlassCard>
  );
};
