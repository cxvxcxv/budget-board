import clsx from 'clsx';
import type { ITransaction } from '../../../entities/transaction.types';

type TTransactionItemProps = {
  transaction: ITransaction;
  showDate?: boolean;
};

export const TransactionItem = ({
  transaction,
  showDate = true,
}: TTransactionItemProps) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 transition hover:bg-white/10">
      <div className="flex flex-col">
        <p className="font-medium">
          {transaction.title}
          {showDate && (
            <span className="ml-2 text-xs font-thin text-text-dimmed">
              ({transaction.date})
            </span>
          )}
        </p>
        <p className="text-sm text-gray-400">{transaction.category}</p>
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
    </div>
  );
};
