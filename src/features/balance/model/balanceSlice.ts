import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type BalanceState = {
  adjustment: number;
};

const initialState: BalanceState = {
  adjustment: 0,
};

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    setBalanceAdjustment(state, action: PayloadAction<number>) {
      state.adjustment = action.payload;
    },
  },
});

export const { setBalanceAdjustment } = balanceSlice.actions;
export default balanceSlice.reducer;
