import clsx from 'clsx';

type TSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Sidebar = ({ isOpen, onClose }: TSidebarProps) => {
  return (
    <>
      <div
        onClick={onClose}
        className={clsx(
          'fixed inset-0 z-10 bg-black/50 transition-opacity lg:hidden',
          isOpen ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      />
      <aside
        className={clsx(
          'fixed inset-y-0 left-0 z-20 w-64 bg-gray-800 p-4 shadow-lg transition-transform lg:static lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <h2 className="mb-6 text-xl font-semibold text-center">Budget Board</h2>
        <nav className="space-y-2">
          {/* sidebar links */}
          <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-700">
            Dashboard
          </a>
        </nav>
      </aside>
    </>
  );
};
