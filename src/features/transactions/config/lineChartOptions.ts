export const lineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: '#d1d5db', // text-gray-300
      },
    },
  },
  scales: {
    x: {
      ticks: { color: '#9ca3af' }, // text-gray-400
      grid: { color: 'rgba(255, 255, 255, 0.1)' },
    },
    y: {
      ticks: { color: '#9ca3af' },
      grid: { color: 'rgba(255, 255, 255, 0.1)' },
    },
  },
};
