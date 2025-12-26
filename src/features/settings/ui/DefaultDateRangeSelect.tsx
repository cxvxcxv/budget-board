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
    <fieldset className="space-y-2">
      <legend className="text-sm font-medium text-text-dimmed">
        Default Date Range
      </legend>
      <p id="date-range-description" className="text-xs text-text-dimmed">
        Choose the default time period for viewing transactions and reports.
      </p>
      <Select
        id="default-date-range"
        value={defaultDateRange}
        onChange={e =>
          dispatch(setDefaultDateRangeType(e.target.value as TDateRangeType))
        }
        className="w-full rounded-lg bg-white/10 p-2"
        aria-describedby="date-range-description"
      >
        {DATE_RANGE_TYPE_OPTIONS.map(o => (
          <Option key={o.value} value={o.value}>
            {o.label}
          </Option>
        ))}
      </Select>
    </fieldset>
  );
};
