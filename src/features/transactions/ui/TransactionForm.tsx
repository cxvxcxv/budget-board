import clsx from 'clsx';
import { useState } from 'react';
import type { ICreateTransactionPayload } from '@/entities';
import {
  addTransaction,
  createTransaction,
  TRANSACTION_FORM_INITIAL_STATE,
} from '@/features/transactions/';
import { useAppDispatch } from '@/shared/hooks';
import {
  Button,
  DateInput,
  Field,
  Option,
  Select,
  Textarea,
} from '@/shared/ui';

type TTransactionFormProps = {
  onClose: () => void;
};

export const TransactionForm = ({ onClose }: TTransactionFormProps) => {
  const dispatch = useAppDispatch();

  const [data, setData] = useState<ICreateTransactionPayload>(
    TRANSACTION_FORM_INITIAL_STATE,
  );

  const handleSubmit = () => {
    try {
      const transaction = createTransaction(data);
      dispatch(addTransaction(transaction));
      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="space-y-4 rounded-2xl" onSubmit={e => e.preventDefault()}>
      <input
        name="amount"
        type="number"
        placeholder="0.00"
        step={0.01}
        className="m-auto block max-w-full border-b border-border bg-transparent p-2 text-center text-xl outline-none hover:border-b-primary focus:border-b-primary"
        onChange={e => setData({ ...data, amount: +e.target.value })}
      />
      {/* type toggle */}
      <div className="flex gap-4">
        <Button
          onClick={() => setData({ ...data, type: 'expense' })}
          className={clsx('border', {
            'border-expense bg-expense text-white': data.type === 'expense',
            'hover:border-expense hover:text-expense': data.type !== 'expense',
          })}
        >
          Expense
        </Button>
        <Button
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
        onChange={e => setData({ ...data, title: e.target.value })}
      />
      <Select
        name="category"
        onChange={e => setData({ ...data, categoryId: e.target.value })}
      >
        <Option>Health</Option>
        <Option>Games</Option>
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
        onChange={e => setData({ ...data, note: e.target.value })}
      />
      <div className="flex justify-end">
        <Button
          className="rounded-xl bg-primary px-6 py-2 hover:bg-indigo-600"
          onClick={handleSubmit}
        >
          Add Transaction
        </Button>
      </div>
    </form>
  );
};
