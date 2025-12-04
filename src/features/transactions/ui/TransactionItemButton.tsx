import clsx from 'clsx';
import type { ButtonHTMLAttributes } from 'react';
import type { IHydratedTransaction } from '@/entities';

type TTransactionItemProps = {
  transaction: IHydratedTransaction;
  showDate?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const TransactionItemButton = ({
  transaction,
  showDate = true,
  ...props
}: TTransactionItemProps) => {
  return (
    <button
      className="flex w-full items-center justify-between px-4 py-3 text-start transition hover:bg-white/10"
      {...props}
    >
      <div className="flex flex-col">
        <p className="font-medium">
          {transaction.title}
          {showDate && (
            <span className="ml-2 text-xs font-thin text-text-dimmed">
              ({transaction.date})
            </span>
          )}
        </p>
        <p className="text-sm text-gray-400">{transaction.categoryName}</p>
      </div>

      <div
        className={clsx(
          'text-right font-semibold',
          transaction.type === 'income' ? 'text-income' : 'text-expense',
        )}
      >
        {transaction.type === 'income' ? '+' : '-'}$
        {transaction.amount.toFixed(2)}
      </div>
    </button>
  );
};
