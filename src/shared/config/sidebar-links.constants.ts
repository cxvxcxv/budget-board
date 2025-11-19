import { ArrowLeftRight, Home, Settings } from 'lucide-react';
import type { ISidebarLink } from '@/entities/sidebar-link.types';

export const sidebarLinks: ISidebarLink[] = [
  { name: 'Dashboard', path: '/', icon: Home },
  {
    name: 'Transactions',
    icon: ArrowLeftRight,
    subLinks: [
      { name: 'All Transactions', path: '/transactions' },
      { name: 'Categories', path: '/transactions/categories' },
    ],
  },
  { name: 'Settings', path: '/settings', icon: Settings },
];
