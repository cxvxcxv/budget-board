import { useState } from 'react';
import { initialFiltersState } from '../../constants/transaction-filters.constants';
import { useAppSelector } from '../../hooks/useStore';
import { useFilteredSortedTransactions } from './lib/useFilteredSortedTransactions';
import type {
  ITransactionFiltersState,
  TTransactionsSortState,
} from './model/types';
import { FiltersModal } from './ui/FiltersModal';
import { TransactionListFlat } from './ui/TransactionListFlat';
import { TransactionListGrouped } from './ui/TransactionListGrouped';
import { TransactionsHeader } from './ui/TransactionsHeader';

export const AllTransactions = () => {
  const transactions = useAppSelector(state => state.transactions.list);

  const [filters, setFilters] =
    useState<ITransactionFiltersState>(initialFiltersState);
  const [sortBy, setSortBy] = useState<TTransactionsSortState>('date');
  const [isReversed, setIsReversed] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const finalTransactions = useFilteredSortedTransactions(
    transactions,
    filters,
    sortBy,
    isReversed,
  );

  return (
    <section className="space-y-8">
      <TransactionsHeader
        sortBy={sortBy}
        setSortBy={setSortBy}
        setIsReversed={setIsReversed}
        filters={filters}
        onOpenFilters={() => setIsFiltersOpen(true)}
      />

      {sortBy === 'date' ? (
        <TransactionListGrouped
          transactions={finalTransactions}
          isReversed={isReversed}
        />
      ) : (
        <TransactionListFlat transactions={finalTransactions} />
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
