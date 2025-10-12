import DoughnutChart from '../transactions/components/DoughnutChart';
import { TransactionsChart } from '../transactions/components/LineChart';
import { RecentTransactions } from '../transactions/components/RecentTransactions';
import { SummaryStats } from '../transactions/components/SummaryStats';

export const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <SummaryStats />
      <TransactionsChart />
      <DoughnutChart />
      <RecentTransactions />
    </div>
  );
};
