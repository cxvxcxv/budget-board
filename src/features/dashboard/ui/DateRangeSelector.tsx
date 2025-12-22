import { buildRangeByType } from '../lib';
import type { TDateRange, TDateRangeType } from '@/entities';
import { DATE_RANGE_TYPE_OPTIONS } from '@/shared/config';
import { Button } from '@/shared/ui';

type TDateRangeSelectorProps = {
  selectedType: TDateRangeType;
  onChangeDateRange: (range: TDateRange) => void;
};

export const DateRangeSelector = ({
  selectedType,
  onChangeDateRange,
}: TDateRangeSelectorProps) => {
  return (
    <div className="flex gap-2">
      {DATE_RANGE_TYPE_OPTIONS.map(o => (
        <Button
          key={o.value}
          onClick={() => onChangeDateRange(buildRangeByType(o.value))}
          className={
            o.value === selectedType
              ? 'bg-primary hover:opacity-90'
              : 'bg-gray-800 hover:bg-gray-700'
          }
        >
          {o.label}
        </Button>
      ))}
    </div>
  );
};
