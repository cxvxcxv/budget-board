import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { selectBalance } from '@/features/balance/model/balanceSelectors';
import { setBalance } from '@/features/balance/model/balanceSlice';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { Button, Field } from '@/shared/ui';

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
      <div className="flex-1">
        <label
          htmlFor="balance"
          className="block flex-1 text-sm text-text-dimmed"
        >
          Balance
        </label>
        <Field
          id="balance"
          type="number"
          placeholder="0.00"
          value={value || ''}
          onChange={e => setValue(+e.target.value)}
          className="mt-1 rounded-lg bg-white/10 p-2"
        />
      </div>

      <Button
        className="h-9 max-w-min bg-primary px-8 hover:bg-primary/70"
        onClick={handleSave}
      >
        Save
      </Button>
    </div>
  );
};
