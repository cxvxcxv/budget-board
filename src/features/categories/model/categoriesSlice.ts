import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { OTHER_CATEGORY } from '../config';
import type { ICategory } from '@/entities';
import { STORAGE_KEYS } from '@/shared/config/';
import { loadFromLocalStorage, saveToLocalStorage } from '@/shared/lib';

function loadInitialCategories(): ICategory[] {
  const categories =
    loadFromLocalStorage<ICategory[]>(STORAGE_KEYS.CATEGORIES) ?? [];

  if (!categories.some((c: ICategory) => c.id === 'other')) {
    categories.unshift(OTHER_CATEGORY);
    saveToLocalStorage(STORAGE_KEYS.CATEGORIES, categories);
  }

  return categories;
}

interface ICategoriesState {
  list: ICategory[];
}

const initialState: ICategoriesState = { list: loadInitialCategories() };

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<ICategory>) => {
      state.list.push(action.payload);
    },
    editCategory: (state, action: PayloadAction<ICategory>) => {
      state.list = state.list.map(category =>
        category.id === action.payload.id ? action.payload : category,
      );
    },
    removeCategory: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(
        category => category.id !== action.payload,
      );
    },
    clearCategories: state => {
      state.list = [];
    },
  },
});

export const { addCategory, editCategory, removeCategory, clearCategories } =
  categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
