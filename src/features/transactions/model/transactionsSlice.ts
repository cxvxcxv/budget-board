import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IHydratedTransaction, ITransaction } from '@/entities';
import { STORAGE_KEYS } from '@/shared/config';
import { loadFromLocalStorage } from '@/shared/lib';

interface ITransactionsState {
  list: ITransaction[];
}

const savedList = loadFromLocalStorage<ITransaction[]>(
  STORAGE_KEYS.TRANSACTIONS,
);

const initialState: ITransactionsState = { list: savedList ?? [] };

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<ITransaction>) => {
      state.list.push(action.payload);
    },
    editTransaction: (state, action: PayloadAction<IHydratedTransaction>) => {
      state.list = state.list.map(transaction =>
        transaction.id === action.payload.id ? action.payload : transaction,
      );
    },
    removeTransaction: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(
        transaction => transaction.id !== action.payload,
      );
    },
    clearTransactions: state => {
      state.list = [];
    },
  },
});

export const {
  addTransaction,
  editTransaction,
  removeTransaction,
  clearTransactions,
} = transactionSlice.actions;
export default transactionSlice.reducer;
