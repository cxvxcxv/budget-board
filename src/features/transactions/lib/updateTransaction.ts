import { validateTransaction } from './validateTransaction';
import type { IHydratedTransaction } from '@/entities';

export function updateTransaction(
  data: IHydratedTransaction,
): IHydratedTransaction {
  validateTransaction(data);
  return data;
}
