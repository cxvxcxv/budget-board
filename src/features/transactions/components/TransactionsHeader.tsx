import clsx from 'clsx';
import { ArrowUpDown, Settings2 } from 'lucide-react';
import { Option } from '../../../components/ui/Option';
import { Select } from '../../../components/ui/Select';
import { initialFiltersState } from '../../../constants/transaction-filters.constants';
import type {
  ITransactionFiltersState,
  TTransactionsSortState,
} from '../../../types/transaction.types';

type Props = {
  sortBy: TTransactionsSortState;
  setSortBy: (val: TTransactionsSortState) => void;
  setIsReversed: React.Dispatch<React.SetStateAction<boolean>>;
  filters: ITransactionFiltersState;
  onOpenFilters: () => void;
};

export const TransactionsHeader = ({
  sortBy,
  setSortBy,
  setIsReversed,
  filters,
  onOpenFilters,
}: Props) => {
  const isDefaultFilters =
    JSON.stringify(filters) === JSON.stringify(initialFiltersState);

  return (
    <div className="flex items-center gap-3">
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
