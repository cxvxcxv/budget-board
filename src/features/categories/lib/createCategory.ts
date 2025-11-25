import { validateCategory } from './validateCategory';
import type { ICategory, ICreateCategoryPayload } from '@/entities';

export function createCategory(data: ICreateCategoryPayload): ICategory {
  validateCategory(data);

  return {
    ...data,
    id: crypto.randomUUID(),
  };
}
