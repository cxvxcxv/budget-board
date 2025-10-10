import { RecentTransactions } from '../transactions/components/RecentTransactions';
import { SummaryStats } from '../transactions/SummaryStats';
import { TransactionsChart } from '../transactions/TransactionsChart';

export const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <SummaryStats />
      <TransactionsChart />
      <RecentTransactions />
    </div>
  );
};
