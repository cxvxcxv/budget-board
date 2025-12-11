import { ArcElement, Chart, Legend, Tooltip } from 'chart.js';
import clsx from 'clsx';
import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import type { TDateRange } from '@/entities';
import {
  doughnutChartOptions,
  getDoughnutChartData,
  selectHydratedTransactions,
} from '@/features/transactions';
import { useAppSelector } from '@/shared/hooks';
import { GlassCard } from '@/shared/ui';

Chart.register(ArcElement, Tooltip, Legend);

type TDoughnutChartProps = {
  dateRange: TDateRange;
};

export const DoughnutChart = ({ dateRange }: TDoughnutChartProps) => {
  const [flipped, setFlipped] = useState(false);
  const transactions = useAppSelector(selectHydratedTransactions);

  const expensesData = getDoughnutChartData(transactions, 'expense', dateRange);
  const incomesData = getDoughnutChartData(transactions, 'income', dateRange);

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
          <div className="flex w-full flex-1 items-center justify-center">
            <div className="h-44 w-44 sm:h-52 sm:w-52">
              <Doughnut data={expensesData} options={doughnutChartOptions} />
            </div>
          </div>
          <button
            onClick={handleFlip}
            className="mt-3 rounded-lg bg-white/10 px-3 py-1 text-sm transition hover:bg-white/20"
          >
            Show Incomes
          </button>
        </GlassCard>

        <GlassCard className="absolute inset-0 flex flex-col items-center justify-between p-4 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <h3 className="text-lg font-semibold text-income">Incomes</h3>
          <div className="flex w-full flex-1 items-center justify-center">
            <div className="h-44 w-44 sm:h-52 sm:w-52">
              <Doughnut data={incomesData} options={doughnutChartOptions} />
            </div>
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
};
