import type { ITransaction } from '../../../entities/transaction.types';
import { COLORS } from '@/shared/config/color.constants';

export function getLineChartData(transactions: ITransaction[]) {
  const daily = new Map<string, { income: number; expense: number }>();

  transactions.forEach((t: ITransaction) => {
    const date = t.date.slice(5); // show month-day only
    if (!daily.has(date)) daily.set(date, { income: 0, expense: 0 });
    const entry = daily.get(date)!;
    if (t.type === 'income') entry.income += t.amount;
    else entry.expense += t.amount;
  });

  const labels = Array.from(daily.keys()).sort();
  const incomeData = labels.map(l => daily.get(l)?.income ?? 0);
  const expenseData = labels.map(l => daily.get(l)?.expense ?? 0);

  return {
    labels,
    datasets: [
      {
        label: 'Income',
        data: incomeData,
        borderColor: COLORS.income,
        backgroundColor: 'rgba(74, 222, 128, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Expense',
        data: expenseData,
        borderColor: COLORS.expense,
        backgroundColor: 'rgba(248, 113, 113, 0.2)',
        tension: 0.4,
      },
    ],
  };
}
