import clsx from 'clsx';
import { useState } from 'react';
import { SidebarDropdown } from './SidebarDropdown';
import { SidebarLink } from './SidebarLink';
import { sidebarLinks } from '@/shared/config/sidebar-links.constants';

type TSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Sidebar = ({ isOpen, onClose }: TSidebarProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (linkName: string) => {
    setOpenDropdown(prev => (prev === linkName ? null : linkName));
  };

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
        className={clsx(
          'fixed inset-y-0 left-0 z-20 w-64 bg-gray-800 p-4 shadow-lg transition-transform lg:static lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <h2 className="mb-6 text-center text-xl font-semibold">Budget Board</h2>
        <nav className="space-y-2">
          {sidebarLinks.map(link =>
            link.subLinks ? (
              <SidebarDropdown
                key={link.name}
                link={link}
                isOpen={openDropdown === link.name}
                onToggle={() => toggleDropdown(link.name)}
                onClose={onClose}
              />
            ) : (
              <SidebarLink key={link.name} link={link} onClose={onClose} />
            ),
          )}
        </nav>
      </aside>
    </>
  );
};
