import { Calendar, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import type { ITransactionFiltersState } from '@/entities/transaction.types';
import { FILTERS_INITIAL_STATE } from '@/features/transactions';
import { useAppSelector } from '@/shared/hooks';
import { Field, Option, Select } from '@/shared/ui';
import { Modal } from '@/shared/ui/Modal';

type TFiltersModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: ITransactionFiltersState) => void;
};

export const FiltersModal = ({
  isOpen,
  onClose,
  onApply,
}: TFiltersModalProps) => {
  const categories = useAppSelector(state => state.categories.list);

  const [filters, setFilters] = useState<ITransactionFiltersState>(
    FILTERS_INITIAL_STATE,
  );

  const handleChange = (key: keyof ITransactionFiltersState, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setFilters(FILTERS_INITIAL_STATE);
  };

  return (
    <Modal title="Filters" show={isOpen} onClose={onClose}>
      <section className="space-y-6">
        {/* date range */}
        <div>
          <h3 className="mb-2 text-sm text-gray-400">Date range</h3>
          <div className="flex items-center gap-2">
            {(
              ['startDate', 'endDate'] as (keyof ITransactionFiltersState)[]
            ).map((label, i) => (
              <div key={i} className="relative flex-1">
                <Field
                  type="date"
                  className="bg-white/10"
                  aria-label={label}
                  name={label}
                  onChange={e => handleChange(label, e.target.value)}
                  value={filters[label]}
                />
                <Calendar
                  size={16}
                  className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
            ))}
          </div>
        </div>

        {/* category */}
        <div className="space-y-1">
          <h3 className="text-sm text-gray-400">Category</h3>
          <div className="relative">
            <Select
              name="category"
              id="category-filter"
              className="w-full appearance-none rounded-md bg-white/10 p-2 pr-8 text-sm text-white outline-none focus:ring-2 focus:ring-primary"
              onChange={e => handleChange('categoryName', e.target.value)}
              value={filters.categoryName}
            >
              <Option value="">All categories</Option>
              {categories.map(category => (
                <Option key={category.id} value={category.id}>
                  {category.name}
                </Option>
              ))}
            </Select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>

        {/* transaction type */}
        <div className="space-y-2">
          <h3 className="text-sm text-gray-400">Transaction type</h3>
          <div className="relative">
            <Select
              name="transactionType"
              id="transactionType-filter"
              className="w-full appearance-none rounded-md bg-white/10 p-2 pr-8 text-sm text-white outline-none focus:ring-2 focus:ring-primary"
              onChange={e => handleChange('type', e.target.value)}
              value={filters.type}
            >
              <Option className="bg-gray-800 text-white" value="all">
                All
              </Option>
              <Option className="bg-gray-800 text-white" value="expense">
                Expense
              </Option>
              <Option className="bg-gray-800 text-white" value="income">
                Income
              </Option>
            </Select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex justify-between">
          <button
            className="rounded-md px-4 py-2 text-sm text-gray-400 hover:text-white hover:underline"
            onClick={handleReset}
          >
            Reset all
          </button>
          <button
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
            onClick={() => onApply(filters)}
          >
            Apply
          </button>
        </div>
      </section>
    </Modal>
  );
};
