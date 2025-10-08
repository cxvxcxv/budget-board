import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { STORAGE_KEYS } from '../../constants/storage-keys.constants';
import type { ITransaction } from '../../types/transaction.types';
import { loadFromLocalStorage } from '../../utils/localStorage';

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
    removeTransaction: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(
        transaction => transaction.id !== action.payload,
      );
    },
    clearAll: state => {
      state.list = [];
    },
  },
});

export const { addTransaction, removeTransaction, clearAll } =
  transactionSlice.actions;
export default transactionSlice.reducer;
