import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectHydratedTransactions } from '../model';
import type { IHydratedTransaction } from '@/entities';
import { GlassCard } from '@/shared/ui';

export const RecentTransactions: React.FC = () => {
  const transactions: IHydratedTransaction[] = useSelector(
    selectHydratedTransactions,
  );

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
    <GlassCard className="h-full overflow-x-hidden p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-primary">Recent Transactions</h2>
        <Link
          to={'/transactions'}
          className="text-sm text-text-muted underline"
        >
          View all
        </Link>
      </div>
      <ul className="space-y-3 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-700 md:max-h-64">
        {recentTransactions.map(transaction => (
          <li
            key={transaction.id}
            className="flex items-center justify-between rounded-xl border border-border bg-black/20 px-4 py-2 backdrop-blur-lg"
          >
            <div>
              <h3 className="font-medium text-gray-100">{transaction.title}</h3>
              <p className="text-sm text-gray-400">
                {transaction.categoryName}
              </p>
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
