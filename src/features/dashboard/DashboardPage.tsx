import DoughnutChart from '../transactions/components/DoughnutChart';
import { TransactionsChart } from '../transactions/components/LineChart';
import { RecentTransactions } from '../transactions/components/RecentTransactions';
import { SummaryStats } from '../transactions/components/SummaryStats';

export const DashboardPage = () => {
  return (
    <div className="grid gap-8">
      <SummaryStats />
      <TransactionsChart />
      <div className="grid grid-cols-[2fr_1fr] gap-8">
        <RecentTransactions />
        <DoughnutChart />
      </div>
    </div>
  );
};
