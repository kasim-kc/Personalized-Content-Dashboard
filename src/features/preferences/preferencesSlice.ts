import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PreferencesState {
  categories: string[];
  darkMode: boolean;
  favorites: string[];
}

const initialState: PreferencesState = {
  categories: ["technology", "business"],
  darkMode: false,
  favorites: [],
};

export const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    toggleCategory: (state, action: PayloadAction<string>) => {
      const index = state.categories.indexOf(action.payload);
      if (index >= 0) {
        state.categories.splice(index, 1);
      } else {
        state.categories.push(action.payload);
      }
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const index = state.favorites.indexOf(action.payload);
      if (index >= 0) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(action.payload);
      }
    },
  },
});

export const { toggleCategory, toggleDarkMode, toggleFavorite } =
  preferencesSlice.actions;
export default preferencesSlice.reducer;
