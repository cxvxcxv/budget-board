import type { IHydratedTransaction, TDateRange } from '@/entities';

export function getDoughnutChartData(
  transactions: IHydratedTransaction[],
  type: 'income' | 'expense',
  dateRange: TDateRange,
) {
  const start = new Date(dateRange.startDate);
  const end = new Date(dateRange.endDate);

  // filter by type and date range
  const filtered = transactions.filter(t => {
    const d = new Date(t.date);
    return t.type === type && d >= start && d <= end;
  });

  const categoryTotals = filtered.reduce<Record<string, number>>((acc, t) => {
    acc[t.categoryName] = (acc[t.categoryName] || 0) + t.amount;
    return acc;
  }, {});

  const categoryColors = filtered.reduce<Record<string, string>>((acc, t) => {
    if (!acc[t.categoryName]) {
      acc[t.categoryName] = t.categoryColorValue || '#9CA3AF';
    }
    return acc;
  }, {});

  const labels = Object.keys(categoryTotals);
  const data = Object.values(categoryTotals);
  const backgroundColors = labels.map(label => categoryColors[label]);

  if (labels.length === 0) {
    return {
      labels: ['No data'],
      datasets: [
        {
          data: [1],
          backgroundColor: ['#374151'],
        },
      ],
    };
  }

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
