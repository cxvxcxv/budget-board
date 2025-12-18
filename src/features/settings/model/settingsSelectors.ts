import type { RootState } from '@/app/store';

export const selectCurrency = (state: RootState) => state.settings.currency;
