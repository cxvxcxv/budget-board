import clsx from 'clsx';
import type { ITransaction } from '../../../types/transaction.types';

type TTransactionItemProps = {
  transaction: ITransaction;
};

export const TransactionItem = ({ transaction }: TTransactionItemProps) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 transition hover:bg-white/10">
      <div className="flex flex-col">
        <span className="font-medium">{transaction.title}</span>
        <span className="text-sm text-gray-400">{transaction.category}</span>
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
