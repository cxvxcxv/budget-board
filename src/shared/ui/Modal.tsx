import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Transition,
} from '@headlessui/react';
import { X } from 'lucide-react';
import type { ReactNode } from 'react';
import { Fragment } from 'react/jsx-runtime';

type TModalProps = {
  show: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

export const Modal = ({ show, onClose, title, children }: TModalProps) => {
  return (
    <Transition show={show} as={Fragment} appear>
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
            aria-labelledby={title}
            transition
            className="w-full max-w-md rounded-2xl bg-gray-900 p-6 pt-0 text-white shadow-lg transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <div className="-mx-6 mb-4 flex items-center border-b border-border p-4">
              <h2 id="filters-title" className="flex-1 text-lg font-semibold">
                {title}
              </h2>
              {/* close modal button */}
              <button
                onClick={onClose}
                className="rounded-full p-1 text-gray-400 hover:bg-white/10 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
            {children}
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  );
};
