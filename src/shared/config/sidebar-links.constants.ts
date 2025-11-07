import { ArrowLeftRight, Home } from 'lucide-react';
import type { ISidebarLink } from '../types/sidebar-link.types';

export const sidebarLinks: ISidebarLink[] = [
  { name: 'Dashboard', path: '/', icon: Home },
  {
    name: 'Transactions',
    icon: ArrowLeftRight,
    subLinks: [
      { name: 'All Transactions', path: '/transactions' },
      { name: 'Add Transaction', path: '/transactions/add' },
      { name: 'Categories', path: '/transactions/categories' },
    ],
  },
];
