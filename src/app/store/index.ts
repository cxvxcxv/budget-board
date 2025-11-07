import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { STORAGE_KEYS } from '@/shared/config/storage-keys.constants';
import { saveToLocalStorage } from '@/shared/lib/localStorage';

export const store = configureStore({
  reducer: rootReducer,
});

//save transactions to localStorage whenever they change
store.subscribe(() => {
  const state = store.getState();
  saveToLocalStorage(STORAGE_KEYS.TRANSACTIONS, state.transactions.list);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
