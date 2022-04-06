import { BackendProducts } from "./products";

export type ApiResponse = {
  data: {
    products: BackendProducts;
  };
};
