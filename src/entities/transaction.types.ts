export interface ITransaction {
  id: string;
  title: string;
  type: 'income' | 'expense';
  amount: number;
  categoryId: string;
  note?: string;
  date: string;
}

export interface ITransactionFiltersState {
  startDate: string;
  endDate: string;
  categoryName: string;
  type: 'all' | 'expense' | 'income';
}

export type TTransactionsSortState = 'date' | 'amount';

export interface ICreateTransactionPayload {
  title: string;
  type: 'income' | 'expense';
  amount: number;
  categoryId: string;
  note?: string;
  date: string;
}
