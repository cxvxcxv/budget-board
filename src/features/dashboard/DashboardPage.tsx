import { RecentTransactions } from '../transactions/components/RecentTransactions';
import { SummaryStats } from '../transactions/SummaryStats';

export const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <SummaryStats />
      <RecentTransactions />
    </div>
  );
};
