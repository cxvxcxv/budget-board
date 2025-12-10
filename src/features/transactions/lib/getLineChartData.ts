import type { ITransaction, TDateRange } from '@/entities'
import { COLORS } from '@/shared/config'

export function getLineChartData(
  transactions: ITransaction[],
  dateRange: TDateRange
) {
  const start = new Date(dateRange.startDate);
  const end = new Date(dateRange.endDate);

  // filter by date range
  const filtered = transactions.filter(t => {
    const d = new Date(t.date);
    return d >= start && d <= end;
  });

  // aggregate by day
  const daily = new Map<string, { income: number; expense: number }>();

  filtered.forEach(t => {
    const date = t.date.slice(5); // mm-dd label
    if (!daily.has(date)) daily.set(date, { income: 0, expense: 0 });
    const entry = daily.get(date)!;

    if (t.type === 'income') entry.income += t.amount;
    else entry.expense += t.amount;
  });

  // prepare chart data
  const labels = Array.from(daily.keys()).sort();
  const incomeData = labels.map(l => daily.get(l)!.income);
  const expenseData = labels.map(l => daily.get(l)!.expense);

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
