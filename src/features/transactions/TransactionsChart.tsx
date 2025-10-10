import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import GlassCard from '../../components/ui/GlassCard';
import { useAppSelector } from '../../hooks/useStore';
import { chartOptions } from './chart/chartOptions';
import { getChartData } from './chart/getChartData';

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const TransactionsChart: React.FC = () => {
  const transactions = useAppSelector(state => state.transactions.list);
  const data = useMemo(() => getChartData(transactions), [transactions]);

  return (
    <GlassCard className="w-fit p-6">
      <h2 className="mb-4 text-xl font-semibold text-primary">
        Income vs Expense Overview
      </h2>
      <div className="">
        <Line data={data} options={chartOptions} />
      </div>
    </GlassCard>
  );
};
