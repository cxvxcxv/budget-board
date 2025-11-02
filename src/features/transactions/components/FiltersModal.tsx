import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Select,
  Transition,
} from '@headlessui/react';
import { Calendar, ChevronDown, X } from 'lucide-react';
import { Fragment, useState } from 'react';
import { initialFiltersState } from '../../../constants/transaction-filters.constants';
import type { ITransactionFiltersState } from '../../../types/transaction.types';

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
    <Transition show={isOpen} as={Fragment} appear>
      <Dialog
        as="div"
        className="relative z-50 focus:outline-none"
        onClose={onClose}
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel
            aria-labelledby="filters-title"
            transition
            className="relative w-full max-w-md rounded-2xl bg-gray-900 p-6 text-white shadow-lg transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            {/* close modal button */}
            <button
              onClick={onClose}
              className="absolute right-3 top-3 rounded-full p-1 text-gray-400 hover:bg-white/10 hover:text-white"
            >
              <X size={20} />
            </button>

            <h2 id="filters-title" className="mb-4 text-lg font-semibold">
              Filters
            </h2>

            <section className="space-y-6">
              {/* date range */}
              <div>
                <h3 className="mb-2 text-sm text-gray-400">Date range</h3>
                <div className="flex items-center gap-2">
                  {(
                    [
                      'startDate',
                      'endDate',
                    ] as (keyof ITransactionFiltersState)[]
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
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  );
};
