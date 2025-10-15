import clsx from 'clsx';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import type { ISidebarLink } from '../../../types/sidebar-link.types';

type TSidebarDropdownProps = {
  link: ISidebarLink;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
};

export const SidebarDropdown = ({
  link,
  isOpen,
  onToggle,
  onClose,
}: TSidebarDropdownProps) => (
  <div>
    <button
      onClick={onToggle}
      className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-white hover:bg-white/10"
    >
      <div className="flex items-center gap-2">
        {link.icon && <link.icon size={18} />}
        <span>{link.name}</span>
      </div>
      {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
    </button>

    <ul
      className={clsx(
        'ml-6 mt-1 overflow-hidden transition-all duration-150 ease-out',
        isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0',
      )}
    >
      {link.subLinks?.map(sub => (
        <li key={sub.name}>
          <NavLink
            to={sub.path}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-md px-3 py-2 text-sm ${
                isActive
                  ? 'bg-white/20 text-white'
                  : 'text-gray-300 hover:bg-white/10'
              }`
            }
          >
            <span>{sub.name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);
