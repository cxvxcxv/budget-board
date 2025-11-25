import type { ICreateCategoryPayload } from '@/entities';
import { fail } from '@/shared/lib';

export function validateCategory(data: ICreateCategoryPayload) {
  // VALIDATION
  if (!data.name?.trim()) fail('Name is required');
  if (!data.iconKey?.trim()) fail('Icon is not chosen');
  if (!data.colorValue?.trim()) fail('Color is not chosen');
}
