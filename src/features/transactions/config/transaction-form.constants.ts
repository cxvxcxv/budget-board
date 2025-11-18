import type { ICreateTransactionPayload } from '@/entities';

export const TRANSACTION_FORM_INITIAL_STATE: ICreateTransactionPayload = {
  title: '',
  type: 'expense',
  amount: 0,
  category: 'health', // *dynamically change later
  date: new Date().toISOString().split('T')[0],
};
