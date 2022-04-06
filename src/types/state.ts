import { SortType } from "../const";
import { FrontProducts } from "./products";

export type AppData = {
  products: FrontProducts;
  sortType: SortType;
  isLoading: boolean;
};
