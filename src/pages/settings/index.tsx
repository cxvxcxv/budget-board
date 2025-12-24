import { CurrencySelect, DefaultDateRangeSelect } from '@/features/settings';
import { BalanceInput } from '@/features/settings/ui/BalanceInput';

export const Settings = () => {
  return (
    <section className="space-y-6">
      <BalanceInput />
      <CurrencySelect />
      <DefaultDateRangeSelect />
    </section>
  );
};
