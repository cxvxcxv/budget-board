import { selectCurrencyCode } from '../model/settingsSelectors';
import { setCurrencyCode } from '../model/settingsSlice';
import { CURRENCIES } from '@/shared/config';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { Option, Select } from '@/shared/ui';

export const CurrencySelect = () => {
  const dispatch = useAppDispatch();
  const currency = useAppSelector(selectCurrencyCode);

  return (
    <div className="space-y-1">
      <label className="text-sm text-text-dimmed">Currency</label>

      <Select
        value={currency}
        onChange={e => dispatch(setCurrencyCode(e.target.value))}
        className="w-full p-2 rounded-lg bg-white/10"
      >
        {CURRENCIES.map(c => (
          <Option key={c.code} value={c.code}>
            {c.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};
