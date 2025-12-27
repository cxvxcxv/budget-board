import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { validateBalanceValue } from '../lib';
import { selectBalance } from '@/features/balance/model/balanceSelectors';
import { setBalance } from '@/features/balance/model/balanceSlice';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { Button, Field } from '@/shared/ui';

export const BalanceInput = () => {
  const dispatch = useAppDispatch();
  const balance = useAppSelector(selectBalance);
  const [textValue, setTextValue] = useState(balance.toString());
  const [error, setError] = useState('');

  useEffect(() => {
    setTextValue(balance.toString());
  }, [balance]);

  const handleSave = () => {
    const validationError = validateBalanceValue(textValue);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError('');
    dispatch(setBalance(Number(textValue)));
    toast.success('Balance saved successfully');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <fieldset className="space-y-2">
      <legend className="text-sm font-medium text-text-muted">Balance</legend>
      <p id="balance-description" className="text-xs text-text-dimmed">
        Set your current account balance. This will be used for calculations.
      </p>
      <div className="flex items-end justify-between gap-12">
        <div className="flex-1">
          <Field
            id="balance"
            type="number"
            placeholder="0.00"
            defaultValue={textValue || ''}
            onChange={e => setTextValue(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-describedby="balance-description balance-error"
            aria-invalid={!!error}
            className={`mt-1 rounded-lg bg-white/10 p-2 ${
              error ? 'border-red-500' : ''
            }`}
            min="0"
            step="0.01"
          />
          {error && (
            <p
              id="balance-error"
              className="mt-1 text-xs text-red-500"
              role="alert"
            >
              {error}
            </p>
          )}
        </div>
        <Button
          className="h-9 max-w-min bg-primary px-8 hover:bg-primary/70 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={handleSave}
          aria-label="Save balance"
        >
          Save
        </Button>
      </div>
    </fieldset>
  );
};
