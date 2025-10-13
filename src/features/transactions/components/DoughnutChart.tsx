import { ArcElement, Chart, Legend, Tooltip } from 'chart.js';
import clsx from 'clsx';
import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import GlassCard from '../../../components/ui/GlassCard';
import { useAppSelector } from '../../../hooks/useStore';
import { doughnutChartOptions } from '../chart/doughnutChartOptions';
import { getPieChartData } from '../chart/getDoughnutChartData';

Chart.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart() {
  const [flipped, setFlipped] = useState(false);
  const transactions = useAppSelector(state => state.transactions.list);

  const expensesData = getPieChartData(transactions, 'expense');
  const incomesData = getPieChartData(transactions, 'income');

  const handleFlip = () => setFlipped(prev => !prev);

  return (
    <div className="perspective relative h-full min-h-[320px] w-full">
      <div
        className={clsx(
          'transform-style-3d relative h-full w-full duration-700',
          { '[transform:rotateY(180deg)]': flipped },
        )}
      >
        <GlassCard className="absolute inset-0 flex flex-col items-center justify-between p-4 [backface-visibility:hidden]">
          <h3 className="text-lg font-semibold text-expense">Expenses</h3>
          <div className="flex items-center justify-center flex-1 w-full">
            <div className="h-44 w-44 sm:h-52 sm:w-52">
              <Doughnut data={expensesData} options={doughnutChartOptions} />
            </div>
          </div>
          <button
            onClick={handleFlip}
            className="px-3 py-1 mt-3 text-sm transition rounded-lg bg-white/10 hover:bg-white/20"
          >
            Show Incomes
          </button>
        </GlassCard>

        <GlassCard className="absolute inset-0 flex flex-col items-center justify-between p-4 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <h3 className="text-lg font-semibold text-income">Incomes</h3>
          <div className="flex items-center justify-center flex-1 w-full">
            <div className="h-44 w-44 sm:h-52 sm:w-52">
              <Doughnut data={incomesData} options={doughnutChartOptions} />
            </div>
          </div>
          <button
            onClick={handleFlip}
            className="px-3 py-1 mt-3 text-sm transition rounded-lg bg-white/10 hover:bg-white/20"
          >
            Show Expenses
          </button>
        </GlassCard>
      </div>
    </div>
  );
}
