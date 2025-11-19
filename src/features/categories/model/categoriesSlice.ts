import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ICategory } from '@/entities';
import { STORAGE_KEYS } from '@/shared/config/';
import { loadFromLocalStorage } from '@/shared/lib';

interface ICategoriesState {
  list: ICategory[];
}

const savedList = loadFromLocalStorage<ICategory[]>(STORAGE_KEYS.CATEGORIES);

const initialState: ICategoriesState = { list: savedList ?? [] };

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<ICategory>) => {
      state.list.push(action.payload);
    },
    removeCategory: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(
        category => category.name !== action.payload,
      );
    },
    clearCategories: state => {
      state.list = [];
    },
  },
});

export const { addCategory, removeCategory, clearCategories } =
  categoriesSlice.actions;
export default categoriesSlice.reducer;
