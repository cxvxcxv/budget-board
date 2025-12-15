// src/store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import balanceReducer from '@/features/balance/model/balanceSlice';
import categoriesReducer from '@/features/categories/model/categoriesSlice';
import transactionsReducer from '@/features/transactions/model/transactionsSlice';

const rootReducer = combineReducers({
  transactions: transactionsReducer,
  categories: categoriesReducer,
  balance: balanceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
