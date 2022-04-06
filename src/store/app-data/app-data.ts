import { createSlice } from "@reduxjs/toolkit";
import { SortType } from "../../const";
import { AppData } from "../../types/state";
import { fetchProductsAction } from "./async-actions";

const initialState: AppData = {
  products: [],
  sortType: SortType.Popular,
  isLoading: false,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductsAction.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProductsAction.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

const { actions, reducer } = dataSlice;

export const { setSortType } = actions;

export const appData = reducer;
