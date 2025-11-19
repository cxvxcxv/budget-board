import { NavLink } from 'react-router-dom';
import type { ISidebarLink } from '../../../entities/sidebar-link.types';

type TSidebarLinkProps = {
  link: ISidebarLink;
  onClose: () => void;
};

export const SidebarLink = ({ link, onClose }: TSidebarLinkProps) => (
  <NavLink
    to={link.path}
    onClick={onClose}
    className={({ isActive }) =>
      `flex items-center gap-2 rounded-md px-3 py-3 ${
        isActive ? 'bg-white/20 text-white' : 'text-gray-300 hover:bg-white/10'
      }`
    }
  >
    {link.icon && <link.icon size={18} />}
    <span>{link.name}</span>
  </NavLink>
);
