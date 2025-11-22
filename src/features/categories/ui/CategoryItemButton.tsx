import { CircleX } from 'lucide-react';
import type { ButtonHTMLAttributes } from 'react';
import type { ICategory } from '@/entities';
import { selectableIcons } from '@/shared/config';

type TCategoryItemButtonProps = {
  category: ICategory;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const CategoryItemButton = ({
  category,
  ...props
}: TCategoryItemButtonProps) => {
  const Icon = selectableIcons.find(i => i.key === category.icon)?.icon;
  return (
    <button
      className="flex aspect-[3/4] flex-col items-center justify-center rounded-xl border bg-opacity-50 p-2 transition-transform hover:-translate-y-2"
      style={{
        borderColor: category.color,
        backgroundColor: `${category.color}33`, // opacity 20%
      }}
      {...props}
    >
      <div className="flex flex-1 items-center">
        {Icon ? <Icon size={64} strokeWidth={1.5} /> : <CircleX size={64} />}
      </div>
      <h4 className="mb-4 md:text-xl lg:text-2xl">{category.name}</h4>
    </button>
  );
};
