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
export default categoriesSlice.reducer;
