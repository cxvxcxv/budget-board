import clsx from 'clsx';
import type { TextareaHTMLAttributes } from 'react';

type TTextareaProps = {
  label?: string;
  containerClassName?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = ({
  label,
  id,
  className,
  containerClassName,
  name,
  ...props
}: TTextareaProps) => {
  return (
    <div className={clsx('flex w-full flex-col gap-1', containerClassName)}>
      {label && (
        <label htmlFor={id} className="text-sm text-gray-400">
          {label}
        </label>
      )}
      <textarea
        name={name}
        className={clsx(
          'rounded-md border border-border bg-transparent px-3 py-2 text-sm text-gray-200 placeholder-gray-400 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-700 focus:border-primary focus:outline-none',
          className,
        )}
        {...props}
      />
    </div>
  );
};
