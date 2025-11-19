import { ArrowLeftRight, Home, Settings } from 'lucide-react';
import type { ISidebarLink } from '@/entities/sidebar-link.types';

export const sidebarLinks: ISidebarLink[] = [
  { name: 'Dashboard', path: '/', icon: Home },
  { name: 'Transactions', path: '/transactions', icon: ArrowLeftRight },
  { name: 'Settings', path: '/settings', icon: Settings },
];
