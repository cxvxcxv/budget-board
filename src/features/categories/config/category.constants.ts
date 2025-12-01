import type { ICategory } from '@/entities';

export const CATEGORY_INITIAL_STATE: ICategory = {
  id: '',
  name: '',
  colorValue: '',
  iconKey: '',
  undeletable: false,
};

export const OTHER_CATEGORY: ICategory = {
  id: 'other',
  name: 'Other',
  iconKey: 'circlequestionmark',
  colorValue: '#9CA3AF',
  undeletable: true,
};
