import { CurrencySelect, DefaultDateRangeSelect } from '@/features/settings';

export const Settings = () => {
  return (
    <section className="space-y-6">
      <CurrencySelect />
      <DefaultDateRangeSelect />
    </section>
  );
};
