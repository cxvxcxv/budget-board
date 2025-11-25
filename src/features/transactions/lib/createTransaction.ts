import type { ICreateTransactionPayload, ITransaction } from '@/entities';
import { fail } from '@/shared/lib';

export function createTransaction(data: ICreateTransactionPayload) {
  // VALIDATION
  if (!data.title?.trim()) fail('Title is required');

  if (data.type !== 'income' && data.type !== 'expense')
    fail('Type must be either "income" or "expense"');

  if (typeof data.amount !== 'number' || data.amount <= 0 || isNaN(data.amount))
    fail('Amount must be a positive number');

  if (!data.categoryId?.trim()) fail('Category is required');

  if (!data.date?.trim()) fail('Date is required');

  if (isNaN(new Date(data.date).getTime()))
    fail('Date must be a valid ISO date string');

  // CREATE TRANSACTION
  const transaction: ITransaction = {
    ...data,
    id: crypto.randomUUID(),
  };

  return transaction;
}
