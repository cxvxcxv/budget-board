import clsx from 'clsx';
import { ArrowUpDown, Settings2 } from 'lucide-react';
import type { Dispatch, SetStateAction } from 'react';
import type {
  ITransactionFiltersState,
  TTransactionsSortState,
} from '@/entities';
import { FILTERS_INITIAL_STATE } from '@/features/transactions';
import { Button, Field, Option, Select } from '@/shared/ui';

type TTransactionHeaderProps = {
  sortBy: TTransactionsSortState;
  setSortBy: (val: TTransactionsSortState) => void;
  setIsReversed: Dispatch<SetStateAction<boolean>>;
  filters: ITransactionFiltersState;
  onOpenFilters: () => void;
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
};

export const TransactionsHeader = ({
  sortBy,
  setSortBy,
  setIsReversed,
  filters,
  onOpenFilters,
  searchTerm,
  setSearchTerm,
}: TTransactionHeaderProps) => {
  const isDefaultFilters =
    JSON.stringify(filters) === JSON.stringify(FILTERS_INITIAL_STATE);

  return (
    <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
      <Field
        name="search"
        placeholder="Search transactions"
        onChange={e => setSearchTerm(e.target.value)}
        value={searchTerm}
        containerClassName="md:flex-[2]"
      />
      <div className="flex w-full gap-2 md:flex-1 md:justify-end">
        <Select
          name="sort-transactions"
          containerClassName="flex-1"
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

        <Button
          onClick={onOpenFilters}
          className={clsx('border hover:border-primary', {
            'border-primary': !isDefaultFilters,
          })}
        >
          <Settings2 strokeWidth={1.5} size={18} />
          Filter
        </Button>
      </div>
    </div>
  );
};
