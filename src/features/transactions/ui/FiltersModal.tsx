import { Select } from '@headlessui/react';
import { Calendar, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import type { ITransactionFiltersState } from '@/entities/transaction.types';
import { initialFiltersState } from '@/features/transactions';
import { Modal } from '@/shared/ui/Modal';

type TFiltersModalProps = {
  isOpen: boolean;
  initialState: ITransactionFiltersState;
  onClose: () => void;
  onApply: (filters: ITransactionFiltersState) => void;
};

export const FiltersModal = ({
  isOpen,
  initialState,
  onClose,
  onApply,
}: TFiltersModalProps) => {
  const [filters, setFilters] =
    useState<ITransactionFiltersState>(initialState);

  const handleChange = (key: keyof ITransactionFiltersState, value: string) => {
    console.log(filters);
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleApply = () => {
    onApply(filters);
    onClose();
  };

  const handleReset = () => {
    setFilters(initialFiltersState);
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
                <input
                  type="date"
                  className="w-full rounded-md bg-white/10 p-2 text-sm text-white outline-none focus:ring-2 focus:ring-primary"
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
              onChange={e => handleChange('category', e.target.value)}
              value={filters.category}
            >
              <option className="bg-gray-800 text-white" value="">
                All categories
              </option>
              {/* map existing categories later */}
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
              <option className="bg-gray-800 text-white" value="all">
                All
              </option>
              <option className="bg-gray-800 text-white" value="expense">
                Expense
              </option>
              <option className="bg-gray-800 text-white" value="income">
                Income
              </option>
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
            onClick={handleApply}
          >
            Apply
          </button>
        </div>
      </section>
    </Modal>
  );
};
