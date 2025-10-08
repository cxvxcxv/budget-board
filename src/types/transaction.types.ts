export interface ITransaction {
  id: string;
  title: string;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  note?: string;
  date: string;
}
