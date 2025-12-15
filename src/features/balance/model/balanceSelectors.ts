import type { RootState } from '@/app/store';

export const selectBalanceAdjustment = (state: RootState) =>
  state.balance.adjustment;

export const selectTotalBalance = (state: RootState) => {
  const tx = state.transactions.list;

  const txNet = tx.reduce((sum, t) => {
    return t.type === 'income' ? sum + t.amount : sum - t.amount;
  }, 0);

  return state.balance.adjustment + txNet;
};
