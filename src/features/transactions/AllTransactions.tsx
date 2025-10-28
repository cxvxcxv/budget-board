import { useMemo, useState } from 'react';
import { initialFiltersState } from '../../constants/transaction-filters.constants';
import { useAppSelector } from '../../hooks/useStore';
import type { ITransactionFiltersState } from '../../types/transaction.types';
import { FiltersModal } from './components/FiltersModal';
import { TransactionItem } from './components/TransactionItem';
import { filterTransactions } from './utils/filterTransactions';
import { groupTransactionsByDate } from './utils/groupTransactionsByDate';

export const AllTransactions = () => {
  const transactions = useAppSelector(state => state.transactions.list);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] =
    useState<ITransactionFiltersState>(initialFiltersState);

  // group by date
  const groupedTransactions = useMemo(
    () => groupTransactionsByDate(filterTransactions(transactions, filters)),
    [filters, transactions],
  );

  return (
    <section className="space-y-8">
      <button onClick={() => setIsFiltersOpen(prev => !prev)}>Filters</button>

      {groupedTransactions.length ? (
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
      ) : (
        <p>No transactions found</p>
      )}

      <FiltersModal
        isOpen={isFiltersOpen}
        onClose={() => setIsFiltersOpen(false)}
        onApply={setFilters}
      />
    </section>
  );
};
