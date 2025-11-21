import clsx from 'clsx';
import { useState } from 'react';
import type { ICategory } from '@/entities';
import { selectableIcons } from '@/shared/config';
import { Button, Field } from '@/shared/ui';

type TCategoryFormProps = {
  category: ICategory;
  onSubmit: () => void;
};

export const CategoryForm = ({ category, onSubmit }: TCategoryFormProps) => {
  const [data, setData] = useState<ICategory>(category ?? {});

  const Icon = selectableIcons.find(i => i.key === data.icon)?.icon;

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
        style={{ backgroundColor: category.color }}
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
      />
      <p className="place-self-start text-sm text-text-dimmed">Icon</p>
      {/* // todo: EXTRACT LATER */}
      <div className="grid max-h-48 w-full grid-cols-5 justify-items-center gap-4 overflow-y-auto scroll-smooth py-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-700">
        {selectableIcons.map(icon => {
          const Icon = icon.icon;
          return (
            <button
              key={icon.key}
              onClick={() => setData({ ...data, icon: icon.key })}
              className={clsx(
                'rounded-md p-2 transition-transform hover:scale-110',
                data.icon === icon.key && 'bg-primary/20 ring-1 ring-primary',
              )}
            >
              <Icon strokeWidth={1.25} size={32} />
            </button>
          );
        })}
      </div>
      <p className="place-self-start text-sm text-text-dimmed">Color</p>
      <div>
        <button className="aspect-square h-6 w-6 rounded-md bg-purple-800"></button>
      </div>
      <Button onClick={handleSubmit}>Submit</Button>
    </form>
  );
};
