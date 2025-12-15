import clsx from 'clsx';
import { Trash2 } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import type { IHydratedTransaction } from '@/entities';
import {
  addTransaction,
  createTransaction,
  editTransaction,
  removeTransaction,
  TRANSACTION_FORM_INITIAL_STATE,
  updateTransaction,
} from '@/features/transactions/';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import {
  Button,
  DateInput,
  Field,
  Option,
  Select,
  Textarea,
} from '@/shared/ui';

type TTransactionFormProps = {
  transaction?: IHydratedTransaction;
  onClose: () => void;
};

export const TransactionForm = ({
  transaction,
  onClose,
}: TTransactionFormProps) => {
  const categories = useAppSelector(state => state.categories.list);

  const dispatch = useAppDispatch();

  const [data, setData] = useState<IHydratedTransaction>(
    transaction ?? {
      ...TRANSACTION_FORM_INITIAL_STATE,
      categoryId: categories[0]?.id,
    },
  );

  const handleDelete = () => {
    try {
      dispatch(removeTransaction(data.id));
      toast.success('Deleted');
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = () => {
    try {
      if (data.id) dispatch(editTransaction(updateTransaction(data)));
      else dispatch(addTransaction(createTransaction(data)));
      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      className="space-y-4 rounded-2xl"
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <input
        name="amount"
        type="number"
        placeholder="0.00"
        step={0.01}
        className="m-auto block max-w-full border-b border-border bg-transparent p-2 text-center text-xl outline-none hover:border-b-primary focus:border-b-primary"
        value={data.amount || ''}
        onChange={e => setData({ ...data, amount: +e.target.value })}
      />
      {/* type toggle */}
      <div className="flex gap-4">
        <Button
          type="button"
          onClick={() => setData({ ...data, type: 'expense' })}
          className={clsx('border', {
            'border-expense bg-expense text-white': data.type === 'expense',
            'hover:border-expense hover:text-expense': data.type !== 'expense',
          })}
        >
          Expense
        </Button>
        <Button
          type="button"
          onClick={() => setData({ ...data, type: 'income' })}
          className={clsx('border', {
            'border-income bg-income text-white': data.type === 'income',
            'hover:border-income hover:text-income': data.type !== 'income',
          })}
        >
          Income
        </Button>
      </div>
      <Field
        name="title"
        placeholder="Title"
        value={data.title}
        onChange={e => setData({ ...data, title: e.target.value })}
      />
      <Select
        name="category"
        value={data.categoryId}
        onChange={e => setData({ ...data, categoryId: e.target.value })}
      >
        {categories.map(category => (
          <Option key={category.id} value={category.id}>
            {category.name}
          </Option>
        ))}
      </Select>

      <DateInput
        name="date"
        value={data.date}
        onChange={e => setData({ ...data, date: e.target.value })}
      />

      <Textarea
        name="note"
        placeholder="Note... (Optional)"
        rows={3}
        value={data.note}
        onChange={e => setData({ ...data, note: e.target.value })}
      />
      <div className="flex justify-end gap-4">
        {transaction && (
          <Button
            type="button"
            className="rounded-xl px-6 py-2 text-danger hover:bg-danger hover:text-white"
            onClick={handleDelete}
          >
            <Trash2 strokeWidth={1.75} width={16} height={16} />
            Delete
          </Button>
        )}
        <Button className="rounded-xl bg-primary px-6 py-2 hover:bg-primary/70">
          Save
        </Button>
      </div>
    </form>
  );
};
