// src/store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import { balanceReducer } from '@/features/balance/model/balanceSlice';
import { categoriesReducer } from '@/features/categories';
import { settingsReducer } from '@/features/settings';
import { transactionsReducer } from '@/features/transactions';

const rootReducer = combineReducers({
  transactions: transactionsReducer,
  categories: categoriesReducer,
  balance: balanceReducer,
  settings: settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
