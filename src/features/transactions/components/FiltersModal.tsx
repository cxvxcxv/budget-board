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

            <div className="text-gray-400">Filter options will go here.</div>
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  );
};
