import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import type { TDateRange } from '@/entities';
import {
  DateRangeSelector,
  formatDateRange,
  INITIAL_DATE_RANGE,
  shiftDateRange,
} from '@/features/dashboard';
import {
  DoughnutChart,
  LineChart,
  RecentTransactions,
  SummaryStats,
  TransactionModal,
} from '@/features/transactions';
import { Button } from '@/shared/ui';

export const Dashboard = () => {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);
  const [dateRange, setDateRange] = useState<TDateRange>(INITIAL_DATE_RANGE);

  const handleChangeDateRange = (range: TDateRange) => {
    setDateRange(range);
  };

  return (
    <section className="relative">
      <DateRangeSelector
        onChangeDateRange={handleChangeDateRange}
        selectedType={dateRange.type}
      />
      <div className="sticky top-0 z-10 backdrop-blur">
        <div className="flex items-center gap-4 py-4">
          <Button onClick={() => setDateRange(r => shiftDateRange(r, 'prev'))}>
            <ArrowLeft />
          </Button>

          <p className="w-4/5 text-center text-2xl md:w-1/3">
            {formatDateRange(dateRange)}
          </p>

          <Button onClick={() => setDateRange(r => shiftDateRange(r, 'next'))}>
            <ArrowRight />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="mt-6 grid gap-8">
        <SummaryStats dateRange={dateRange} />
        <LineChart dateRange={dateRange} />

        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <RecentTransactions />
          <DoughnutChart dateRange={dateRange} />
        </div>

        <TransactionModal
          isOpen={isTransactionModalOpen}
          onClose={() => setIsTransactionModalOpen(false)}
        />
      </div>
    </section>
  );
};
