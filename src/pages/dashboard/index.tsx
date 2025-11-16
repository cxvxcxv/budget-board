import { useState } from 'react';
import {
  AddTransactionModal,
  DoughnutChart,
  LineChart,
  RecentTransactions,
  SummaryStats,
} from '@/features/transactions';

export const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="grid gap-8">
      <SummaryStats />
      <LineChart />
      <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
        <RecentTransactions />
        <DoughnutChart />
      </div>
      <button onClick={() => setIsOpen(true)}>add transaction</button>
      <AddTransactionModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};
