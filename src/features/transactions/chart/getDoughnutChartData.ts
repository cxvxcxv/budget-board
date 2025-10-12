import {
  expenseColors,
  incomeColors,
} from '../../../constants/color.constants';
import type { ITransaction } from '../../../types/transaction.types';

export function getPieChartData(
  transactions: ITransaction[],
  type: 'income' | 'expense',
) {
  const filtered = transactions.filter(t => t.type === type);

  const categoryTotals = filtered.reduce<Record<string, number>>((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + t.amount;
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
