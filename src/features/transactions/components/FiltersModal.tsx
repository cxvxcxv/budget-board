import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Transition,
} from '@headlessui/react';
import { X } from 'lucide-react';
import { Fragment } from 'react';

interface FiltersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FiltersModal = ({ isOpen, onClose }: FiltersModalProps) => {
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
            <button
              onClick={onClose}
              className="absolute right-3 top-3 rounded-full p-1 text-gray-400 hover:bg-white/10 hover:text-white"
            >
              <X size={20} />
            </button>

            <h2 id="filters-title" className="mb-4 text-lg font-semibold">
              Filters
            </h2>

            <section className="space-y-4">
              <div>
                <h3 className="text-text-dimmed">Date range</h3>
                <div className="flex justify-between">
                  <input type="date" className="rounded-md bg-white/10 p-2" />
                  <input type="date" className="rounded-md bg-white/10 p-2" />
                </div>
              </div>
              <div>
                <h3 className="text-text-dimmed">Category</h3>
                <select
                  name="category"
                  id="category-filter"
                  className="rounded-md bg-white/10 p-2"
                >
                  {/* categories */}
                  <option value="health">Health</option>
                </select>
              </div>
              <div>
                <h3 className="text-text-dimmed">Transaction type</h3>
                <select
                  name="transaction"
                  id="transactionType-filter"
                  className="rounded-md bg-white/10 p-2"
                >
                  <option value="expense">Expense</option>
                  <option value="income">Income</option>
                </select>
              </div>
              <div className="flex justify-between">
                <button>Reset all</button>
                <button>Apply</button>
              </div>
            </section>
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  );
};
