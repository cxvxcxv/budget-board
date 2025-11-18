import clsx from 'clsx';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type TButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  disabled,
  className,
  ...props
}: TButtonProps) => {
  return (
    <button
      className={clsx(
        'flex flex-1 items-center justify-center gap-2 rounded-md border-border p-2 text-sm transition',
        {
          'cursor-not-allowed opacity-50': disabled,
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
