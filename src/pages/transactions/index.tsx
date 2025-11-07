import { useState } from 'react';
import type {
  ITransactionFiltersState,
  TTransactionsSortState,
} from '@/features/transactions';
import {
  FiltersModal,
  initialFiltersState,
  TransactionListFlat,
  TransactionListGrouped,
  TransactionsHeader,
  useFilteredSortedTransactions,
} from '@/features/transactions';
import { useAppSelector } from '@/shared/hooks/useStore';

export const Transactions = () => {
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
