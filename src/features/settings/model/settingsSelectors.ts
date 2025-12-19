import type { RootState } from '@/app/store';

export const selectCurrencyCode = (state: RootState) =>
  state.userSettings.currencyCode;
