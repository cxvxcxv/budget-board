import type { IHydratedTransaction } from '@/entities';

export function getPieChartData(
  transactions: IHydratedTransaction[],
  type: 'income' | 'expense',
) {
  const filtered = transactions.filter(t => t.type === type);

  const categoryTotals = filtered.reduce<Record<string, number>>((acc, t) => {
    acc[t.categoryName] = (acc[t.categoryName] || 0) + t.amount;
    return acc;
  }, {});

  const categoryColors = filtered.reduce<Record<string, string>>((acc, t) => {
    if (!acc[t.categoryName]) {
      acc[t.categoryName] = t.categoryColorValue || '#9CA3AF'; // fallback gray
    }
    return acc;
  }, {});

  const labels = Object.keys(categoryTotals);
  const data = Object.values(categoryTotals);

  const backgroundColors = labels.map(
    label => categoryColors[label] || '#9CA3AF', // backup fallback
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
