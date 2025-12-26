import { selectCurrencyCode } from '../model/settingsSelectors';
import { setCurrencyCode } from '../model/settingsSlice';
import { CURRENCIES } from '@/shared/config';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { Option, Select } from '@/shared/ui';

export const CurrencySelect = () => {
  const dispatch = useAppDispatch();
  const currency = useAppSelector(selectCurrencyCode);

  return (
    <fieldset className="space-y-2">
      <legend className="text-sm font-medium text-text-dimmed">Currency</legend>
      <p id="currency-description" className="text-xs text-text-dimmed">
        Select the currency for your transactions and balance display.
      </p>
      <Select
        id="currency"
        value={currency}
        onChange={e => dispatch(setCurrencyCode(e.target.value))}
        className="w-full rounded-lg bg-white/10 p-2"
        aria-describedby="currency-description"
      >
        {CURRENCIES.map(c => (
          <Option key={c.code} value={c.code}>
            {c.label}
          </Option>
        ))}
      </Select>
    </fieldset>
  );
};
