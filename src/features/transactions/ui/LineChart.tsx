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
import { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import type { TDateRange } from '@/entities';
import { getLineChartData, lineChartOptions } from '@/features/transactions';
import { useAppSelector } from '@/shared/hooks/';
import { GlassCard } from '@/shared/ui';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

type TLineChartProps = {
  dateRange: TDateRange;
};

export const LineChart = ({ dateRange }: TLineChartProps) => {
  const transactions = useAppSelector(state => state.transactions.list);
  const data = useMemo(
    () => getLineChartData(transactions, dateRange),
    [transactions, dateRange],
  );

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
