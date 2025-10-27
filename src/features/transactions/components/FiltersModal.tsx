import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Transition,
} from '@headlessui/react';
import { Calendar, ChevronDown, X } from 'lucide-react';
import { Fragment } from 'react';

interface TFiltersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FiltersModal = ({ isOpen, onClose }: TFiltersModalProps) => {
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
            {/* Close button */}
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
                  {['from', 'to'].map((label, i) => (
                    <div key={i} className="relative flex-1">
                      <input
                        type="date"
                        className="w-full rounded-md bg-white/10 p-2 text-sm text-white outline-none focus:ring-2 focus:ring-primary"
                        aria-label={label}
                        name={label}
                      />
                      <Calendar
                        size={16}
                        className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Category */}
              <div className="space-y-1">
                <h3 className="text-sm text-gray-400">Category</h3>
                <div className="relative">
                  <select
                    name="category"
                    id="category-filter"
                    className="w-full appearance-none rounded-md bg-white/10 p-2 pr-8 text-sm text-white outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option className="bg-gray-800 text-white" value="">
                      All categories
                    </option>
                    {/* map existing categories later */}
                  </select>
                  <ChevronDown
                    size={16}
                    className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                </div>
              </div>

              {/* Transaction type */}
              <div className="space-y-2">
                <h3 className="text-sm text-gray-400">Transaction type</h3>
                <div className="relative">
                  <select
                    name="transactionType"
                    id="transactionType-filter"
                    className="w-full appearance-none rounded-md bg-white/10 p-2 pr-8 text-sm text-white outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option className="bg-gray-800 text-white" value="">
                      All
                    </option>
                    <option className="bg-gray-800 text-white" value="expense">
                      Expense
                    </option>
                    <option className="bg-gray-800 text-white" value="income">
                      Income
                    </option>
                  </select>
                  <ChevronDown
                    size={16}
                    className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-4 flex justify-between">
                <button className="rounded-md px-4 py-2 text-sm text-gray-400 hover:text-white hover:underline">
                  Reset all
                </button>
                <button className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:opacity-90">
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
