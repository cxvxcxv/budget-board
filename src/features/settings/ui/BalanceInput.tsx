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
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setValue(balance);
  }, [balance]);

  const validateValue = (val: number) => {
    if (isNaN(val)) return 'Please enter a valid number';
    if (val < 0) return 'Balance cannot be negative';
    return '';
  };

  const handleSave = () => {
    const validationError = validateValue(value);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError('');
    setIsSaving(true);
    dispatch(setBalance(value));
    toast.success('Balance saved successfully');
    setIsSaving(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = +e.target.value;
    setValue(newValue);
    setError(''); // Clear error on change
  };

  return (
    <fieldset className="space-y-2">
      <legend className="text-sm font-medium text-text-dimmed">Balance</legend>
      <p id="balance-description" className="text-xs text-text-dimmed">
        Set your current account balance. This will be used for calculations.
      </p>
      <div className="flex items-end justify-between gap-12">
        <div className="flex-1">
          <Field
            id="balance"
            type="number"
            placeholder="0.00"
            value={value || ''}
            onChange={handleChange}
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
          disabled={isSaving}
          aria-label="Save balance"
        >
          {isSaving ? 'Saving...' : 'Save'}
        </Button>
      </div>
    </fieldset>
  );
};
