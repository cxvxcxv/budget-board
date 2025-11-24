import clsx from 'clsx';
import { useState } from 'react';
import { CategoryIconsList } from './CategoryIconsList';
import type { ICategory } from '@/entities';
import { SELECTABE_ICONS } from '@/shared/config';
import { SELECTABLE_COLORS } from '@/shared/config/selectable-color.constants';
import { Button, Field } from '@/shared/ui';

type TCategoryFormProps = {
  category: ICategory;
  onSubmit: () => void;
};

export const CategoryForm = ({ category, onSubmit }: TCategoryFormProps) => {
  const [data, setData] = useState<ICategory>(category ?? {});

  const Icon = SELECTABE_ICONS.find(i => i.key === data.icon)?.icon;

  const handleSubmit = () => {
    try {
      onSubmit();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className="flex flex-col items-center gap-4"
      onClick={e => e.preventDefault()}
    >
      <div
        className="flex aspect-square h-24 w-24 items-center justify-center rounded-full"
        style={{ backgroundColor: data.color }}
      >
        {Icon && <Icon size={48} />}
      </div>
      <Field
        name="name"
        autoComplete="off"
        placeholder="Name"
        value={data.name}
        onChange={e => setData({ ...data, name: e.target.value })}
        className="text-center"
        label="Name"
        id="name"
      />
      <p className="place-self-start text-sm text-text-dimmed">Icon</p>
      <CategoryIconsList
        selectedIcon={data.icon}
        onSelect={key => setData(prev => ({ ...prev, icon: key }))}
      />

      <p className="place-self-start text-sm text-text-dimmed">Color</p>
      {/* // todo: EXTRACT LATER */}
      <div className="flex w-full gap-4 overflow-x-auto scroll-smooth px-1 pb-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-700">
        {SELECTABLE_COLORS.map(color => (
          <button
            key={color.key}
            className={clsx(
              'aspect-square h-6 w-6 rounded-md',
              data.color === color.value && 'border-2',
            )}
            style={{ backgroundColor: color.value }}
            onClick={() => setData({ ...data, color: color.value })}
          />
        ))}
      </div>
      <Button onClick={handleSubmit}>Submit</Button>
    </form>
  );
};
