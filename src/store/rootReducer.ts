// src/store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import transactionsReducer from '../features/transactions/transactionsSlice';

const rootReducer = combineReducers({
  transactions: transactionsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
