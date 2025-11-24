import clsx from 'clsx';
import { SELECTABE_ICONS } from '@/shared/config';

type TCategoryIconsListProps = {
  selectedIconKey: string;
  onSelect: (key: string) => void;
};

export const CategoryIconsList = ({
  selectedIconKey,
  onSelect,
}: TCategoryIconsListProps) => {
  return (
    <div className="grid max-h-48 w-full grid-cols-5 justify-items-center gap-4 overflow-y-auto scroll-smooth py-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-700">
      {SELECTABE_ICONS.map(icon => {
        const Icon = icon.Icon;
        return (
          <button
            key={icon.key}
            onClick={() => onSelect(icon.key)}
            className={clsx(
              'rounded-md p-2 transition-transform hover:scale-110',
              selectedIconKey === icon.key &&
                'bg-primary/20 ring-1 ring-primary',
            )}
          >
            <Icon strokeWidth={1.25} size={32} />
          </button>
        );
      })}
    </div>
  );
};
