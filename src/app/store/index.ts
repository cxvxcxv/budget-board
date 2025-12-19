import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { STORAGE_KEYS } from '@/shared/config';
import { saveToLocalStorage } from '@/shared/lib';

export const store = configureStore({
  reducer: rootReducer,
});

//save to localStorage whenever they change
store.subscribe(() => {
  const state = store.getState();
  saveToLocalStorage(STORAGE_KEYS.TRANSACTIONS, state.transactions.list);
  saveToLocalStorage(STORAGE_KEYS.CATEGORIES, state.categories.list);
  saveToLocalStorage(STORAGE_KEYS.USER_SETTINGS, state.userSettings);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
