import { ArcElement, Chart, Legend, Tooltip } from 'chart.js';
import clsx from 'clsx';
import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import GlassCard from '../../../components/ui/GlassCard';
import { useAppSelector } from '../../../hooks/useStore';
import { getPieChartData } from '../chart/getDoughnutChartData';

Chart.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart() {
  const [flipped, setFlipped] = useState(false);
  const transactions = useAppSelector(state => state.transactions.list);

  const expensesData = getPieChartData(transactions, 'expense');
  const incomesData = getPieChartData(transactions, 'income');

  const handleFlip = () => setFlipped(prev => !prev);

  return (
    <div className="perspective relative h-80 w-full max-w-sm">
      <div
        className={clsx(
          'transform-style-3d relative h-full w-full duration-700',
          { '[transform:rotateY(180deg)]': flipped },
        )}
      >
        <GlassCard className="absolute inset-0 flex flex-col items-center justify-between p-4 [backface-visibility:hidden]">
          <h3 className="text-expense text-lg font-semibold">Expenses</h3>
          <div className="h-52 w-52">
            <Doughnut data={expensesData} />
          </div>
          <button
            onClick={handleFlip}
            className="mt-3 rounded-lg bg-white/10 px-3 py-1 text-sm transition hover:bg-white/20"
          >
            Show Incomes
          </button>
        </GlassCard>

        <GlassCard className="absolute inset-0 flex flex-col items-center justify-between p-4 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <h3 className="text-income text-lg font-semibold">Incomes</h3>
          <div className="h-52 w-52">
            <Doughnut data={incomesData} />
          </div>
          <button
            onClick={handleFlip}
            className="mt-3 rounded-lg bg-white/10 px-3 py-1 text-sm transition hover:bg-white/20"
          >
            Show Expenses
          </button>
        </GlassCard>
      </div>
    </div>
  );
}
