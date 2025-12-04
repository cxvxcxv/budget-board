import type { IHydratedTransaction } from '@/entities';

export const TRANSACTION_FORM_INITIAL_STATE: IHydratedTransaction = {
  id: '',
  title: '',
  type: 'expense',
  amount: 0,
  categoryId: '',
  date: new Date().toISOString().split('T')[0],
  categoryName: '',
  categoryColorValue: '',
  categoryIconKey: '',
};
