import React, { useMemo } from 'react';
import type { ITransaction } from '@/entities';
import { useAppSelector } from '@/shared/hooks/useStore';
import { GlassCard } from '@/shared/ui';

export const SummaryStats: React.FC = () => {
  const transactions: ITransaction[] = useAppSelector(
    state => state.transactions.list,
  );

  const { income, expense, balance } = useMemo(() => {
    const income = transactions
      .filter((t: ITransaction) => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);

    const expense = transactions
      .filter((t: ITransaction) => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);

    return {
      income,
      expense,
      balance: income - expense,
    };
  }, [transactions]);

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
      <GlassCard className="p-6 text-center">
        <h3 className="mb-2 text-text-dimmed">Total Income</h3>
        <p className="text-2xl font-semibold text-green-400">${income}</p>
      </GlassCard>

      <GlassCard className="p-6 text-center">
        <h3 className="mb-2 text-text-dimmed">Total Expense</h3>
        <p className="text-2xl font-semibold text-red-400">${expense}</p>
      </GlassCard>

      <GlassCard className="p-6 text-center">
        <h3 className="mb-2 text-text-dimmed">Balance</h3>
        <p
          className={`text-2xl font-semibold ${
            balance >= 0 ? 'text-white' : 'text-red-400'
          }`}
        >
          ${balance}
        </p>
      </GlassCard>
    </div>
  );
};
