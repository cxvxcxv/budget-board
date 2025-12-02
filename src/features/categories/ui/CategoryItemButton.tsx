import { CircleX } from 'lucide-react';
import type { ButtonHTMLAttributes } from 'react';
import type { ICategory } from '@/entities';
import { SELECTABLE_ICONS } from '@/shared/config';

type TCategoryItemButtonProps = {
  category: ICategory;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const CategoryItemButton = ({
  category,
  ...props
}: TCategoryItemButtonProps) => {
  const Icon = SELECTABLE_ICONS.find(i => i.key === category.iconKey)?.Icon;
  return (
    <button
      className="flex aspect-[3/4] flex-col items-center justify-center rounded-xl border bg-opacity-50 p-2 transition-transform hover:-translate-y-2"
      style={{
        borderColor: category.colorValue,
        backgroundColor: `${category.colorValue}33`, // opacity 20%
      }}
      {...props}
    >
      <div className="flex flex-1 items-center">
        {Icon ? <Icon size={64} strokeWidth={1.5} /> : <CircleX size={64} />}
      </div>
      <h4 className="mb-1 mt-2 w-full truncate px-1 text-center text-sm md:text-base lg:text-lg">
        {category.name}
      </h4>
    </button>
  );
};
