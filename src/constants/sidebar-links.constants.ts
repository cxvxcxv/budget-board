import { ArrowLeftRight, Home } from 'lucide-react';

export const sidebarLinks = [
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
