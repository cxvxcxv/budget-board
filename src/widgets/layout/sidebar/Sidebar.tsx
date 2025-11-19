import clsx from 'clsx';
import { SidebarLink } from './SidebarLink';
import { sidebarLinks } from '@/shared/config/sidebar-links.constants';

type TSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Sidebar = ({ isOpen, onClose }: TSidebarProps) => {
  return (
    <>
      {/* overlay for mobile */}
      <div
        onClick={onClose}
        className={clsx(
          'fixed inset-0 z-10 bg-black/50 transition-opacity lg:hidden',
          isOpen ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      />

      <aside
        inert={!isOpen} // disable focus and interaction inside if closed
        className={clsx(
          'fixed inset-y-0 left-0 z-20 w-64 bg-gray-800 p-4 shadow-lg transition-transform lg:static lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <h2 className="mb-6 text-center text-xl font-semibold">Budget Board</h2>
        <nav className="space-y-2">
          {sidebarLinks.map(link => (
            <SidebarLink key={link.name} link={link} onClose={onClose} />
          ))}
        </nav>
      </aside>
    </>
  );
};
