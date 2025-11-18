import { clsx } from 'clsx';
import type { InputHTMLAttributes } from 'react';

type TFieldProps = {
  label?: string;
  containerClassName?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Field = ({
  label,
  id,
  className,
  containerClassName,
  ...props
}: TFieldProps) => {
  return (
    <div className={clsx('flex w-full flex-col gap-1', containerClassName)}>
      {label && (
        <label htmlFor={id} className="text-sm text-gray-400">
          {label}
        </label>
      )}
      <input
        className={clsx(
          'rounded-md border border-border bg-transparent px-3 py-2 text-sm text-gray-200 placeholder-gray-400 focus:border-primary focus:outline-none',
          className,
        )}
        {...props}
      />
    </div>
  );
};
