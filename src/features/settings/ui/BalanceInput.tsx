import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { selectBalance } from '@/features/balance/model/balanceSelectors';
import { setBalance } from '@/features/balance/model/balanceSlice';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { Button } from '@/shared/ui';

export const BalanceInput = () => {
  const dispatch = useAppDispatch();
  const balance = useAppSelector(selectBalance);
  const [value, setValue] = useState(balance);

  useEffect(() => {
    setValue(balance);
  }, [balance]);

  const handleSave = () => {
    dispatch(setBalance(value));
    toast.success('Saved');
  };

  return (
    <div className="flex items-end justify-between gap-12">
      <label className="flex-1 text-sm text-text-dimmed">
        Balance
        <input
          type="number"
          placeholder="0.00"
          value={value || ''}
          onChange={e => setValue(+e.target.value)}
          className="w-full p-2 mt-1 text-white rounded-lg bg-white/10"
        />
      </label>

      <Button
        className="px-8 h-9 max-w-min bg-primary hover:bg-primary/70"
        onClick={handleSave}
      >
        Save
      </Button>
    </div>
  );
};
