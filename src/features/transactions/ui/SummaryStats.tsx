import type { TDateRange } from '@/entities'
import { useAppSelector } from '@/shared/hooks'
import { useAnimatedNumber } from '@/shared/hooks/useAnimateNumber'
import { GlassCard } from '@/shared/ui'
import { useMemo } from 'react'

type TSummaryStatsProps = {
  dateRange: TDateRange;
};

export const SummaryStats = ({ dateRange }: TSummaryStatsProps) => {
  const transactions = useAppSelector(state => state.transactions.list);

  const { income, expense, balance } = useMemo(() => {
    const start = new Date(dateRange.startDate);
    const end = new Date(dateRange.endDate);

    const filtered = transactions.filter(t => {
      const date = new Date(t.date);
      return date >= start && date <= end; // inclusive filtering
    });

    const income = filtered
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);

    const expense = filtered
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);

    return {
      income,
      expense,
      balance: income - expense,
    };
  }, [transactions, dateRange]);

  const animatedIncome = useAnimatedNumber(income);
  const animatedExpense = useAnimatedNumber(expense);
  const animatedBalance = useAnimatedNumber(balance);

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
      <GlassCard className="p-6 text-center">
        <h3 className="mb-2 text-text-dimmed">Total Income</h3>
        <p className="text-2xl font-semibold text-green-400">${animatedIncome.toFixed(2)}
</p>
      </GlassCard>

      <GlassCard className="p-6 text-center">
        <h3 className="mb-2 text-text-dimmed">Total Expense</h3>
        <p className="text-2xl font-semibold text-red-400">${animatedExpense.toFixed(2)}</p>
      </GlassCard>

      <GlassCard className="p-6 text-center">
        <h3 className="mb-2 text-text-dimmed">Balance</h3>
        <p
          className={`text-2xl font-semibold ${
            balance >= 0 ? 'text-white' : 'text-red-400'
          }`}
        >
          ${animatedBalance.toFixed(2)}
        </p>
      </GlassCard>
    </div>
  );
};
