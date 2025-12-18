import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { SETTINGS_INITIAL_STATE } from '@/shared/config';

const settingsSlice = createSlice({
  name: 'settings',
  initialState: SETTINGS_INITIAL_STATE,
  reducers: {
    setCurrency(state, action: PayloadAction<string>) {
      state.currency = action.payload;
    },
  },
});

export const { setCurrency } = settingsSlice.actions;
export const settingsReducer = settingsSlice.reducer;
