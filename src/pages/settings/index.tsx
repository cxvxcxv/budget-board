import { CurrencySelect, DefaultDateRangeSelect } from '@/features/settings';
import { BalanceInput } from '@/features/settings/ui/BalanceInput';

export const Settings = () => {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-sm text-text-dimmed">
          Customize your budget board preferences.
        </p>
      </header>
      <section className="space-y-6">
        <BalanceInput />
        <CurrencySelect />
        <DefaultDateRangeSelect />
      </section>
    </div>
  );
};
