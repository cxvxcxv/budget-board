import { Select } from '@headlessui/react';
import { Calendar, ChevronDown } from 'lucide-react';
import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import type { ITransactionFiltersState } from '@/entities/transaction.types';
import { FILTERS_INITIAL_STATE } from '@/features/transactions';
import { Field } from '@/shared/ui';
import { Modal } from '@/shared/ui/Modal';

type TFiltersModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onApply: Dispatch<SetStateAction<ITransactionFiltersState>>;
};

export const FiltersModal = ({
  isOpen,
  onClose,
  onApply,
}: TFiltersModalProps) => {
  const [filters, setFilters] = useState<ITransactionFiltersState>(
    FILTERS_INITIAL_STATE,
  );

  const handleChange = (key: keyof ITransactionFiltersState, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleApply = () => {
    onApply(filters);
    onClose();
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
                  className="absolute text-gray-400 -translate-y-1/2 pointer-events-none right-2 top-1/2"
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
              className="w-full p-2 pr-8 text-sm text-white rounded-md outline-none appearance-none bg-white/10 focus:ring-2 focus:ring-primary"
              onChange={e => handleChange('category', e.target.value)}
              value={filters.category}
            >
              <option className="text-white bg-gray-800" value="">
                All categories
              </option>
              {/* map existing categories later */}
            </Select>
            <ChevronDown
              size={16}
              className="absolute text-gray-400 -translate-y-1/2 pointer-events-none right-2 top-1/2"
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
              className="w-full p-2 pr-8 text-sm text-white rounded-md outline-none appearance-none bg-white/10 focus:ring-2 focus:ring-primary"
              onChange={e => handleChange('type', e.target.value)}
              value={filters.type}
            >
              <option className="text-white bg-gray-800" value="all">
                All
              </option>
              <option className="text-white bg-gray-800" value="expense">
                Expense
              </option>
              <option className="text-white bg-gray-800" value="income">
                Income
              </option>
            </Select>
            <ChevronDown
              size={16}
              className="absolute text-gray-400 -translate-y-1/2 pointer-events-none right-2 top-1/2"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <button
            className="px-4 py-2 text-sm text-gray-400 rounded-md hover:text-white hover:underline"
            onClick={handleReset}
          >
            Reset all
          </button>
          <button
            className="px-4 py-2 text-sm font-semibold text-white rounded-md bg-primary hover:opacity-90"
            onClick={handleApply}
          >
            Apply
          </button>
        </div>
      </section>
    </Modal>
  );
};
