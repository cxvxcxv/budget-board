import clsx from 'clsx';
import { ArrowUpDown, Settings2 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Option } from '../../components/ui/Option';
import { Select } from '../../components/ui/Select';
import { initialFiltersState } from '../../constants/transaction-filters.constants';
import { useAppSelector } from '../../hooks/useStore';
import type {
  ITransactionFiltersState,
  TTransactionsSortState,
} from '../../types/transaction.types';
import { FiltersModal } from './components/FiltersModal';
import { TransactionItem } from './components/TransactionItem';
import { filterTransactions } from './utils/filterTransactions';
import { groupTransactionsByDate } from './utils/groupTransactionsByDate';
import { sortTransactions } from './utils/sortTransactions';

export const AllTransactions = () => {
  const transactions = useAppSelector(state => state.transactions.list);

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] =
    useState<ITransactionFiltersState>(initialFiltersState);
  const [sortBy, setSortBy] = useState<TTransactionsSortState>('date');
  const [isReversed, setIsReversed] = useState(false);

  const groupedTransactions = useMemo(() => {
    if (sortBy !== 'date') return null;

    const filtered = filterTransactions(transactions, filters);
    const sorted = sortTransactions(filtered, 'date');
    return groupTransactionsByDate(sorted, isReversed);
  }, [filters, isReversed, sortBy, transactions]);

  const sortedTransactions = useMemo(() => {
    if (sortBy !== 'amount') return null;

    const filtered = filterTransactions(transactions, filters);
    const sorted = sortTransactions(filtered, 'amount');
    return isReversed ? [...sorted].reverse() : sorted;
  }, [filters, isReversed, sortBy, transactions]);

  return (
    <section className="space-y-8">
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
          onClick={() => setIsReversed(prev => !prev)}
          title="Reverse order"
          className="rounded-md p-2 text-gray-300 transition hover:bg-white/10 hover:text-white"
        >
          <ArrowUpDown strokeWidth={1.5} size={18} />
        </button>

        <button
          onClick={() => setIsFiltersOpen(prev => !prev)}
          className={clsx(
            'flex items-center gap-2 rounded-md border p-2 text-sm transition hover:border-primary',
            {
              'border-primary':
                JSON.stringify(filters) !== JSON.stringify(initialFiltersState),
            },
          )}
        >
          <Settings2 strokeWidth={1.5} size={18} />
          Filter
        </button>
      </div>

      {sortBy === 'date' && groupedTransactions?.length ? (
        groupedTransactions.map(([date, txs]) => (
          <div key={date} className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-200">{date}</h3>

            <div className="divide-y divide-white/5 overflow-hidden rounded-lg bg-white/5">
              {txs.map(tx => (
                <TransactionItem key={tx.id} transaction={tx} />
              ))}
            </div>
          </div>
        ))
      ) : sortBy === 'amount' && sortedTransactions?.length ? (
        <div className="divide-y divide-white/5 overflow-hidden rounded-lg bg-white/5">
          {sortedTransactions.map(tx => (
            <TransactionItem key={tx.id} transaction={tx} />
          ))}
        </div>
      ) : (
        <p className="text-gray-400">No transactions found.</p>
      )}

      <FiltersModal
        isOpen={isFiltersOpen}
        initialState={filters}
        onClose={() => setIsFiltersOpen(false)}
        onApply={setFilters}
      />
    </section>
  );
};
