import type { ICreateTransactionPayload } from '@/entities';

export const TRANSACTION_FORM_INITIAL_STATE: ICreateTransactionPayload = {
  title: '',
  type: 'expense',
  amount: 0,
  categoryId: '',
  date: new Date().toISOString().split('T')[0],
};
