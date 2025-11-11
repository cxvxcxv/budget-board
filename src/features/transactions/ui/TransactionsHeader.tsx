import clsx from 'clsx';
import { ArrowUpDown, Settings2 } from 'lucide-react';
import type {
  ITransactionFiltersState,
  TTransactionsSortState,
} from '@/entities/transaction.types';
import { initialFiltersState } from '@/features/transactions/config';
import { Option, Select } from '@/shared/ui';
import { Field } from '@/shared/ui/Field';

type Props = {
  sortBy: TTransactionsSortState;
  setSortBy: (val: TTransactionsSortState) => void;
  setIsReversed: React.Dispatch<React.SetStateAction<boolean>>;
  filters: ITransactionFiltersState;
  onOpenFilters: () => void;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export const TransactionsHeader = ({
  sortBy,
  setSortBy,
  setIsReversed,
  filters,
  onOpenFilters,
  searchTerm,
  setSearchTerm,
}: Props) => {
  const isDefaultFilters =
    JSON.stringify(filters) === JSON.stringify(initialFiltersState);

  return (
    <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
      <Field
        name="search"
        placeholder="Search transactions"
        onChange={e => setSearchTerm(e.target.value)}
        value={searchTerm}
        outerClassname="md:flex-[2]"
      />
      <div className="flex w-full gap-2 md:flex-1 md:justify-end">
        <Select
          name="sort-transactions"
          outerClassname="flex-1"
          className="bg-transparent"
          value={sortBy}
          onChange={e => setSortBy(e.target.value as TTransactionsSortState)}
        >
          <Option value="date">Date</Option>
          <Option value="amount">Amount</Option>
        </Select>

        <button
          onClick={() => setIsReversed(p => !p)}
          title="Reverse order"
          className="flex items-center justify-center rounded-md p-2 text-gray-300 transition hover:bg-white/10 hover:text-white"
        >
          <ArrowUpDown strokeWidth={1.5} size={18} />
        </button>

        <button
          onClick={onOpenFilters}
          className={clsx(
            'flex flex-1 items-center justify-center gap-2 rounded-md border p-2 text-sm transition hover:border-primary',
            { 'border-primary': !isDefaultFilters },
          )}
        >
          <Settings2 strokeWidth={1.5} size={18} />
          Filter
        </button>
      </div>
    </div>
  );
};
