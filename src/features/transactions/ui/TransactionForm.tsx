import clsx from 'clsx';
import { useState } from 'react';
import { Button, Field, Option, Select, Textarea } from '@/shared/ui';

export const TransactionForm = () => {
  const [type, setType] = useState<'expense' | 'income'>('expense');

  return (
    <form
      className="space-y-4 rounded-2xl bg-gray-800 p-4 shadow-md"
      onSubmit={e => e.preventDefault()}
    >
      <input
        name="amount"
        type="number"
        placeholder="0.00"
        step={0.01}
        className="m-auto block max-w-full border-b bg-transparent p-2 text-center outline-none hover:border-b-primary focus:border-b-primary"
      />

      {/* type toggle */}
      <div className="flex gap-4">
        <Button
          state={type === 'expense' ? 'active' : 'inactive'}
          onClick={() => setType('expense')}
          className={clsx('hover:border-expense', {
            'bg-expense text-white': type === 'expense',
          })}
        >
          Expense
        </Button>
        <Button
          state={type === 'income' ? 'active' : 'inactive'}
          onClick={() => setType('income')}
          className={clsx('hover:border-income', {
            'bg-income text-white': type === 'income',
          })}
        >
          Income
        </Button>
      </div>

      <Field name="title" placeholder="Title" />

      <Select label="Category" name="category" className="">
        <Option>Health</Option>
        <Option>Games</Option>
      </Select>

      <Textarea name="note" placeholder="Note... (Optional)" className="" />

      <div className="flex justify-end">
        <Button
          state="active"
          className="rounded-xl bg-primary px-6 py-2 hover:bg-indigo-600"
        >
          Add Transaction
        </Button>
      </div>
    </form>
  );
};
