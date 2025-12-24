import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { STORAGE_KEYS } from '@/shared/config';
import { loadFromLocalStorage } from '@/shared/lib';

type BalanceState = {
  value: number;
};

const initialState: BalanceState = {
  value: loadFromLocalStorage(STORAGE_KEYS.BALANCE) ?? 0,
};

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    setBalance(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
    applyBalanceDelta(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { setBalance, applyBalanceDelta } = balanceSlice.actions;
export const balanceReducer = balanceSlice.reducer;
