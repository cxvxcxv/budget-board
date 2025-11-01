import clsx from 'clsx';
import type { OptionHTMLAttributes, ReactNode } from 'react';

type TOptionProps = {
  children: ReactNode;
} & OptionHTMLAttributes<HTMLOptionElement>;

export const Option = ({ children, className, ...props }: TOptionProps) => {
  return (
    <option className={clsx('bg-gray-800 text-white', className)} {...props}>
      {children}
    </option>
  );
};
