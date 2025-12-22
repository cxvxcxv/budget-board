import { selectDefaultDateRangeType, setDefaultDateRangeType } from '../model';
import type { TDateRangeType } from '@/entities';
import { DATE_RANGE_TYPE_OPTIONS } from '@/shared/config';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { Option, Select } from '@/shared/ui';

export const DefaultDateRangeSelect = () => {
  const dispatch = useAppDispatch();
  const defaultDateRange =
    useAppSelector(selectDefaultDateRangeType) ?? 'month';

  return (
    <div className="space-y-2">
      <label className="text-sm text-text-dimmed">Default Date Range</label>

      <Select
        value={defaultDateRange}
        onChange={e =>
          dispatch(setDefaultDateRangeType(e.target.value as TDateRangeType))
        }
        className="w-full rounded-lg bg-white/10 p-2"
      >
        {DATE_RANGE_TYPE_OPTIONS.map(o => (
          <Option key={o.value} value={o.value}>
            {o.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};
