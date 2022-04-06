import { SortType } from "../../const";
import { FrontProducts } from "../../types/products";

export const sortProducts = (products: FrontProducts, type: string) => {
  switch (type) {
    case SortType.Quantity:
      return products.slice().filter((product) => product.quantityAvailable > 0);
    default:
      return products.slice();
  }
};
