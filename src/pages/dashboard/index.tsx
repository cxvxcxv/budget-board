import clsx from 'clsx';
import { ArrowLeft, ArrowRight, Plus } from 'lucide-react';
import { useState } from 'react';
import type { TDateRange } from '@/entities';
import { selectTotalBalance } from '@/features/balance/model/balanceSelectors';
import {
  DateRangeSelector,
  formatDateRange,
  INITIAL_DATE_RANGE,
  shiftDateRange,
} from '@/features/dashboard';
import { formatCurrency } from '@/features/settings';
import {
  DoughnutChart,
  LineChart,
  RecentTransactions,
  SummaryStats,
  TransactionModal,
} from '@/features/transactions';
import { useAppSelector } from '@/shared/hooks';
import { Button } from '@/shared/ui';

export const Dashboard = () => {
  const balance = useAppSelector(selectTotalBalance);
  const currencyCode = useAppSelector(state => state.userSettings.currencyCode);
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);
  const [dateRange, setDateRange] = useState<TDateRange>(INITIAL_DATE_RANGE);

  return (
    <section className="relative space-y-6">
      <div className="rounded-2xl border border-white/10 bg-gray-900/60 p-6 backdrop-blur">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-wide text-text-dimmed">
              Total Balance
            </p>
            <p
              className={clsx(
                'text-3xl font-semibold',
                balance >= 0 ? 'text-white' : 'text-red-400',
              )}
            >
              {formatCurrency(balance, currencyCode)}
            </p>
          </div>

          <Button
            onClick={() => setIsTransactionModalOpen(true)}
            className="bg-primary px-4 py-2 hover:bg-indigo-600 md:max-w-max"
          >
            <Plus />
            Add transaction
          </Button>
        </div>

        <div className="mt-4">
          <DateRangeSelector
            onChangeDateRange={setDateRange}
            selectedType={dateRange.type}
          />
        </div>
      </div>

      <div className="sticky top-0 z-10 -mx-6 border-y border-white/10 bg-gray-900/80 px-6 py-3 backdrop-blur">
        <div className="flex items-center justify-center gap-4">
          <Button onClick={() => setDateRange(r => shiftDateRange(r, 'prev'))}>
            <ArrowLeft />
          </Button>

          <p className="min-w-[220px] text-center text-lg font-medium">
            {formatDateRange(dateRange)}
          </p>

          <Button onClick={() => setDateRange(r => shiftDateRange(r, 'next'))}>
            <ArrowRight />
          </Button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="grid gap-8">
        <SummaryStats dateRange={dateRange} />
        <LineChart dateRange={dateRange} />

        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <RecentTransactions />
          <DoughnutChart dateRange={dateRange} />
        </div>
      </div>

      <TransactionModal
        isOpen={isTransactionModalOpen}
        onClose={() => setIsTransactionModalOpen(false)}
      />
    </section>
  );
};
