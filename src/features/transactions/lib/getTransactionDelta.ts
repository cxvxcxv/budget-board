import type { IHydratedTransaction, ITransaction } from '@/entities';

export const getTransactionDelta = (t: IHydratedTransaction | ITransaction) => {
  return t.type === 'income' ? t.amount : -t.amount;
};
