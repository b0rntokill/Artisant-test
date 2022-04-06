import { ReducerNameSpace } from "../../const";
import { FrontProducts } from "../../types/products";
import type { RootState } from "../root-reducer";

export const getProducts = (state: RootState): FrontProducts =>
  state[ReducerNameSpace.data].products;
export const getSortType = (state: RootState): string => state[ReducerNameSpace.data].sortType;
export const getIsLoading = (state: RootState): boolean => state[ReducerNameSpace.data].isLoading;
