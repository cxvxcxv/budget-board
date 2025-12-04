import { validateTransaction } from './validateTransaction';
import type { IHydratedTransaction, ITransaction } from '@/entities';

export function createTransaction(data: IHydratedTransaction) {
  validateTransaction(data);

  const transaction: ITransaction = {
    ...data,
    id: crypto.randomUUID(),
  };

  return transaction;
}
