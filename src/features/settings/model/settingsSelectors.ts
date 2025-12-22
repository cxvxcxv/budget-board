import type { RootState } from '@/app/store';

export const selectCurrencyCode = (state: RootState) =>
  state.userSettings.currencyCode;

export const selectDefaultDateRangeType = (state: RootState) =>
  state.userSettings.defaultDateRangeType;
