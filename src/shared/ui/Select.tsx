import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';
import type { ReactNode, SelectHTMLAttributes } from 'react';

type TSelectProps = {
  label?: string;
  children: ReactNode;
  outerClassname?: string;
} & SelectHTMLAttributes<HTMLSelectElement>;

export const Select = ({
  label,
  children,
  className,
  outerClassname,
  ...props
}: TSelectProps) => {
  return (
    <div className={clsx('flex flex-col gap-1', outerClassname)}>
      {label && <span className="text-sm text-gray-400">{label}</span>}

      <div className="relative">
        <select
          {...props}
          className={clsx(
            'w-full appearance-none rounded-md bg-white/10 p-2 pr-8 text-sm text-white outline-none focus:ring-2 focus:ring-primary',
            className,
          )}
        >
          {children}
        </select>

        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>
    </div>
  );
};
