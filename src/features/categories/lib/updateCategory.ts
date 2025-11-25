import { validateCategory } from './validateCategory';
import type { ICategory } from '@/entities';

export function updateCategory(data: ICategory): ICategory {
  validateCategory(data);
  return data;
}
