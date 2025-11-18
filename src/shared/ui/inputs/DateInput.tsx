import { Calendar } from 'lucide-react';
import type { InputHTMLAttributes } from 'react';
import { Field } from './Field';

type TDateInput = {} & InputHTMLAttributes<HTMLInputElement>;

export const DateInput = ({ ...props }: TDateInput) => {
  return (
    <div className="relative flex-1">
      <Field type="date" {...props} />
      <Calendar
        size={16}
        className="absolute text-gray-400 -translate-y-1/2 pointer-events-none right-2 top-1/2"
      />
    </div>
  );
};
