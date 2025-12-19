import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IUserSettingsState } from '@/entities';
import { SETTINGS_INITIAL_STATE, STORAGE_KEYS } from '@/shared/config';
import { loadFromLocalStorage } from '@/shared/lib';

const savedSettings = loadFromLocalStorage<IUserSettingsState>(
  STORAGE_KEYS.USER_SETTINGS,
);

const settingsSlice = createSlice({
  name: 'settings',
  initialState: savedSettings ?? SETTINGS_INITIAL_STATE,
  reducers: {
    setCurrencyCode(state, action: PayloadAction<string>) {
      state.currencyCode = action.payload;
    },
  },
});

export const { setCurrencyCode } = settingsSlice.actions;
export const settingsReducer = settingsSlice.reducer;
