import {
  DoughnutChart,
  LineChart,
  RecentTransactions,
  SummaryStats,
} from '@/features/transactions';

export const Dashboard = () => {
  return (
    <div className="grid gap-8">
      <SummaryStats />
      <LineChart />
      <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
        <RecentTransactions />
        <DoughnutChart />
      </div>
    </div>
  );
};
