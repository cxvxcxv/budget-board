import { Plus } from 'lucide-react';
import { Button } from '../ui';

type TNavbarConfig = {
  title: string;
  rightSlot?: React.ReactNode;
};

export const ROUTES_NAVBAR_CONFIG: Record<string, TNavbarConfig> = {
  '/': {
    title: 'Dashboard',
  },
  '/transactions': {
    title: 'Transactions',
    rightSlot: (
      <Button className="bg-primary px-3 py-1 text-sm hover:opacity-90">
        <Plus size={16} />
        <span className="ml-1">Add</span>
      </Button>
    ),
  },
  '/categories': {
    title: 'Categories',
  },
  '/settings': {
    title: 'Settings',
  },
};
