import { useMemo } from 'react';
import type { TDateRange } from '@/entities';
import { formatCurrency } from '@/features/settings';
import { useAppSelector } from '@/shared/hooks';
import { useAnimatedNumber } from '@/shared/hooks/useAnimateNumber';
import { GlassCard } from '@/shared/ui';

type TSummaryStatsProps = {
  dateRange: TDateRange;
};

export const SummaryStats = ({ dateRange }: TSummaryStatsProps) => {
  const transactions = useAppSelector(state => state.transactions.list);
  const currency = useAppSelector(state => state.settings.currency);

  const {
    income,
    expense,
    netChange: netChange,
  } = useMemo(() => {
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
      netChange: income - expense,
    };
  }, [transactions, dateRange]);

  const animatedIncome = useAnimatedNumber(income);
  const animatedExpense = useAnimatedNumber(expense);
  const animatedNetChange = useAnimatedNumber(netChange);

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
      <GlassCard className="p-6 text-center">
        <h3 className="mb-2 text-text-dimmed">Income</h3>
        <p className="text-2xl font-semibold text-income">
          {formatCurrency(animatedIncome, currency)}
        </p>
      </GlassCard>

      <GlassCard className="p-6 text-center">
        <h3 className="mb-2 text-text-dimmed">Expense</h3>
        <p className="text-2xl font-semibold text-expense">
          {formatCurrency(animatedExpense, currency)}
        </p>
      </GlassCard>

      <GlassCard className="p-6 text-center">
        <h3 className="mb-2 text-text-dimmed">Net Change</h3>
        <p
          className={`text-2xl font-semibold ${
            netChange >= 0 ? 'text-income' : 'text-expense'
          }`}
        >
          {formatCurrency(animatedNetChange, currency)}
        </p>
      </GlassCard>
    </div>
  );
};
