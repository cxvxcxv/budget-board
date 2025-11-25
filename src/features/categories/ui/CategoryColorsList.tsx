import clsx from 'clsx';
import { SELECTABLE_COLORS } from '@/shared/config';

type TCategoryColorsListProps = {
  selectedColorValue: string;
  onSelect: (colorValue: string) => void;
};

export const CategoryColorsList = ({
  selectedColorValue,
  onSelect,
}: TCategoryColorsListProps) => {
  return (
    <div className="flex w-full gap-4 overflow-x-auto scroll-smooth px-1 pb-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-700">
      {SELECTABLE_COLORS.map(color => (
        <button
          key={color.key}
          type="button"
          className={clsx(
            'aspect-square h-6 w-6 rounded-md',
            selectedColorValue === color.value && 'border-2',
          )}
          style={{ backgroundColor: color.value }}
          onClick={() => onSelect(color.value)}
        />
      ))}
    </div>
  );
};
