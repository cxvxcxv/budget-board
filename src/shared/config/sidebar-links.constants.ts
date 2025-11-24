import { ArrowLeftRight, Home, Settings, Tag } from 'lucide-react';
import type { ISidebarLink } from '@/entities/sidebar-link.types';

export const SIDEBAR_LINKS: ISidebarLink[] = [
  { name: 'Dashboard', path: '/', icon: Home },
  { name: 'Transactions', path: '/transactions', icon: ArrowLeftRight },
  { name: 'Categories', path: '/categories', icon: Tag },
  { name: 'Settings', path: '/settings', icon: Settings },
];
