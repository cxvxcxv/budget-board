import { useState } from 'react';
import type { ICategory } from '@/entities';
import {
  CategoryColorsList,
  CategoryIconsList,
} from '@/features/categories/ui';
import { SELECTABE_ICONS } from '@/shared/config';
import { Button, Field } from '@/shared/ui';

type TCategoryFormProps = {
  category: ICategory;
  onSubmit: () => void;
};

export const CategoryForm = ({ category, onSubmit }: TCategoryFormProps) => {
  const [data, setData] = useState<ICategory>(category ?? {});

  const Icon = SELECTABE_ICONS.find(i => i.key === data.iconKey)?.Icon;

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
        style={{ backgroundColor: data.colorValue }}
      >
        {Icon && <Icon size={48} />}
      </div>
      <Field
        name="name"
        autoComplete="off"
        placeholder="Name"
        value={data.name}
        onChange={e => setData(prev => ({ ...prev, name: e.target.value }))}
        className="text-center"
        label="Name"
        id="name"
      />
      <p className="place-self-start text-sm text-text-dimmed">Icon</p>
      <CategoryIconsList
        selectedIconKey={data.iconKey}
        onSelect={key => setData(prev => ({ ...prev, iconKey: key }))}
      />

      <p className="place-self-start text-sm text-text-dimmed">Color</p>
      <CategoryColorsList
        selectedColorValue={data.colorValue}
        onSelect={value => setData(prev => ({ ...prev, colorValue: value }))}
      />

      <Button onClick={handleSubmit}>Submit</Button>
    </form>
  );
};
