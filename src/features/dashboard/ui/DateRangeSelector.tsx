import type { TDateRange, TDateRangeType } from '@/entities'
import { Button } from '@/shared/ui'
import { buildRangeByType } from '../lib'

const RANGE_TYPES: TDateRangeType[] = ['day', 'week', 'month', 'year'];

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
      {RANGE_TYPES.map(type => (
        <Button
          key={type}
          onClick={() => onChangeDateRange(buildRangeByType(type))}
          className={
            type === selectedType
              ? 'bg-primary hover:opacity-90'
              : 'bg-gray-800 hover:bg-gray-700'
          }
        >
          {/* capitalize type */}
          {type[0].toUpperCase() + type.slice(1)}
        </Button>
      ))}
    </div>
  );
};
