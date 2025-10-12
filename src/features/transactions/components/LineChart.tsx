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
import GlassCard from '../../../components/ui/GlassCard';
import { useAppSelector } from '../../../hooks/useStore';
import { getLineChartData } from '../chart/getLineChartData';
import { lineChartOptions } from '../chart/lineChartOptions';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const LineChart: React.FC = () => {
  const transactions = useAppSelector(state => state.transactions.list);
  const data = useMemo(() => getLineChartData(transactions), [transactions]);

  return (
    <GlassCard className="overflow-x-hidden p-6">
      <h2 className="mb-4 text-xl font-semibold text-primary">
        Income vs Expense Overview
      </h2>
      <div className="h-52 w-full md:h-96">
        <Line data={data} options={lineChartOptions} />
      </div>
    </GlassCard>
  );
};
