import { configureStore } from '@reduxjs/toolkit';
import { STORAGE_KEYS } from '../constants/storage-keys.constants';
import transactionsReducer from '../features/transactions/transactionsSlice';
import { saveToLocalStorage } from '../utils/localStorage';

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
});

//save transactions to localStorage whenever they change
store.subscribe(() => {
  const state = store.getState();
  saveToLocalStorage(STORAGE_KEYS.TRANSACTIONS, state.transactions.list);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
