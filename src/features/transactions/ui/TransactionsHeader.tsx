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
    <div className="flex items-center gap-3">
      <Field
        name="search"
        placeholder="Search transaction"
        onChange={e => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <Select
        name="sort-transactions"
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
        className="rounded-md p-2 text-gray-300 transition hover:bg-white/10 hover:text-white"
      >
        <ArrowUpDown strokeWidth={1.5} size={18} />
      </button>

      <button
        onClick={onOpenFilters}
        className={clsx(
          'flex items-center gap-2 rounded-md border p-2 text-sm transition hover:border-primary',
          { 'border-primary': !isDefaultFilters },
        )}
      >
        <Settings2 strokeWidth={1.5} size={18} />
        Filter
      </button>
    </div>
  );
};
