export interface ITransaction {
  id: string;
  title: string;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  note?: string;
  date: string;
}

export interface ITransactionFiltersState {
  startDate: string;
  endDate: string;
  category: string;
  type: 'all' | 'expense' | 'income';
}

export type TTransactionsSortState = 'date' | 'amount';
