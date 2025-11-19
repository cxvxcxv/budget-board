// src/store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import categoriesReducer from '@/features/categories/model/categoriesSlice';
import transactionsReducer from '@/features/transactions/model/transactionsSlice';

const rootReducer = combineReducers({
  transactions: transactionsReducer,
  categories: categoriesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
