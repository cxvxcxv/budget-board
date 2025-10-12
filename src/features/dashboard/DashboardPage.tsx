import DoughnutChart from '../transactions/components/DoughnutChart';
import { LineChart } from '../transactions/components/LineChart';
import { RecentTransactions } from '../transactions/components/RecentTransactions';
import { SummaryStats } from '../transactions/components/SummaryStats';

export const DashboardPage = () => {
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
