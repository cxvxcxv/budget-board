import clsx from 'clsx';
import type { InputHTMLAttributes } from 'react';

type TFieldProps = {
  name: string;
  label?: string;
  outerClassname?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Field = ({
  name,
  label,
  id,
  className,
  outerClassname,
  ...props
}: TFieldProps) => {
  return (
    <div className={clsx('flex w-full flex-col gap-1', outerClassname)}>
      {label && (
        <label htmlFor={id} className="text-sm text-gray-400">
          {label}
        </label>
      )}
      <input
        name={name}
        className={clsx(
          'rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm text-gray-200 placeholder-gray-400 focus:border-primary focus:outline-none',
          className,
        )}
        {...props}
      />
    </div>
  );
};
