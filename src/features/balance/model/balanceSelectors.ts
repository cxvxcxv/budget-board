import type { RootState } from '@/app/store';

export const selectBalance = (state: RootState) => {
  return state.balance.value;
};
