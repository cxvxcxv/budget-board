import { validateTransaction } from './validateTransaction';
import type { ICreateTransactionPayload, ITransaction } from '@/entities';

export function createTransaction(data: ICreateTransactionPayload) {
  validateTransaction(data);

  const transaction: ITransaction = {
    ...data,
    id: crypto.randomUUID(),
  };

  return transaction;
}
