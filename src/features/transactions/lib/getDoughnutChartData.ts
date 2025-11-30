import type { IHydratedTransaction } from '@/entities';
import { expenseColors, incomeColors } from '@/shared/config/color.constants';

export function getPieChartData(
  transactions: IHydratedTransaction[],
  type: 'income' | 'expense',
) {
  const filtered = transactions.filter(t => t.type === type);

  const categoryTotals = filtered.reduce<Record<string, number>>((acc, t) => {
    acc[t.categoryName] = (acc[t.categoryName] || 0) + t.amount;
    return acc;
  }, {});

  const labels = Object.keys(categoryTotals);
  const data = Object.values(categoryTotals);

  const colorMap = type === 'income' ? incomeColors : expenseColors;

  const backgroundColors = labels.map(
    label => colorMap[label] || colorMap['Other'],
  );

  return {
    labels,
    datasets: [
      {
        data,
        backgroundColor: backgroundColors,
        borderColor: 'rgba(255,255,255,0.1)',
        borderWidth: 2,
        hoverOffset: 8,
        weight: 1.2,
      },
    ],
  };
}
