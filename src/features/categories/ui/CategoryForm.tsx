import clsx from 'clsx';
import { useState } from 'react';
import toast from 'react-hot-toast';
import type { ICategory } from '@/entities';
import {
  addCategory,
  CATEGORY_INITIAL_STATE,
  CategoryColorsList,
  CategoryIconsList,
  createCategory,
  editCategory,
  removeCategory,
  updateCategory,
} from '@/features/categories';
import { SELECTABLE_ICONS } from '@/shared/config';
import { useAppDispatch } from '@/shared/hooks';
import { Button, Field } from '@/shared/ui';

type TCategoryFormProps = {
  category?: ICategory;
  onClose: () => void;
};

export const CategoryForm = ({ category, onClose }: TCategoryFormProps) => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<ICategory>(
    category ?? CATEGORY_INITIAL_STATE,
  );

  const Icon = SELECTABLE_ICONS.find(i => i.key === data.iconKey)?.Icon;

  const handleSubmit = () => {
    try {
      if (data.id) dispatch(editCategory(updateCategory(data)));
      else dispatch(addCategory(createCategory(data)));
      toast.success('Successfully saved');
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = () => {
    try {
      dispatch(removeCategory(data.id));
      toast.success('Deleted');
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className="flex flex-col items-center gap-4"
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <p className="place-self-start text-sm text-text-dimmed">Preview</p>
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
        maxLength={50}
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

      <div className="mt-4 flex w-full justify-between gap-12">
        {data.id !== 'other' && (
          <Button
            className={clsx(
              'text-danger hover:bg-danger hover:text-white active:scale-95',
              !data.id && 'hidden',
            )}
            onClick={handleDelete}
            type="button"
          >
            Delete
          </Button>
        )}

        <Button
          className="bg-primary hover:bg-indigo-800 active:scale-95"
          type="submit"
        >
          Save
        </Button>
      </div>
    </form>
  );
};
