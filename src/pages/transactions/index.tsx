import { useState } from 'react';
import { useSelector } from 'react-redux';
import type {
  IHydratedTransaction,
  ITransactionFiltersState,
  TTransactionsSortState,
} from '@/entities';
import {
  FILTERS_INITIAL_STATE,
  FiltersModal,
  selectHydratedTransactions,
  TransactionListFlat,
  TransactionListGrouped,
  TransactionModal,
  TransactionsHeader,
  useProcessedTransactions,
} from '@/features/transactions';

export const Transactions = () => {
  const transactions = useSelector(selectHydratedTransactions);

  const [filters, setFilters] = useState<ITransactionFiltersState>(
    FILTERS_INITIAL_STATE,
  );
  const [sortBy, setSortBy] = useState<TTransactionsSortState>('date');
  const [isReversed, setIsReversed] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);
  const [modalTransaction, setModalTransaction] =
    useState<IHydratedTransaction>();

  const finalTransactions = useProcessedTransactions(
    transactions,
    filters,
    sortBy,
    searchTerm,
    isReversed,
  );

  const handleReverse = () => {
    setIsReversed(prev => !prev);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleApplyFilters = (filters: ITransactionFiltersState) => {
    setFilters(filters);
    setIsFiltersOpen(false);
  };

  const handleEditTransaction = (transaction: IHydratedTransaction) => {
    setModalTransaction(transaction);
    setIsTransactionModalOpen(true);
  };

  return (
    <section className="space-y-8">
      <TransactionsHeader
        sortBy={sortBy}
        setSortBy={setSortBy}
        onReverse={handleReverse}
        filters={filters}
        onOpenFilters={() => setIsFiltersOpen(true)}
        searchTerm={searchTerm}
        onSearch={handleSearch}
      />

      {sortBy === 'date' ? (
        <TransactionListGrouped
          onEditTransaction={handleEditTransaction}
          transactions={finalTransactions}
          isReversed={isReversed}
        />
      ) : (
        <TransactionListFlat
          transactions={finalTransactions}
          onEditTransaction={handleEditTransaction}
        />
      )}

      <FiltersModal
        isOpen={isFiltersOpen}
        onClose={() => setIsFiltersOpen(false)}
        onApply={handleApplyFilters}
      />
      <TransactionModal
        transaction={modalTransaction}
        isOpen={isTransactionModalOpen}
        onClose={() => setIsTransactionModalOpen(false)}
      />
    </section>
  );
};
