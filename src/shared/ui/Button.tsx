import clsx from 'clsx';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type TButtonProps = {
  children: ReactNode;
  state: 'active' | 'inactive';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  state,
  disabled,
  className,
  ...props
}: TButtonProps) => {
  return (
    <button
      className={clsx(
        'flex flex-1 items-center justify-center gap-2 rounded-md border p-2 text-sm transition',
        {
          'bg-primary hover:border-primary hover:bg-transparent':
            state === 'active',
          'hover:border-primary': state === 'inactive',
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
