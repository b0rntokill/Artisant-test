import { BackendProduct, BackendProducts, FrontProduct, FrontProducts } from "./types/products";

export const getBackendToFrontProducts = (arr: BackendProducts): FrontProducts => {
  const adapterArr = arr.map((product: BackendProduct) => {
    const newObj: FrontProduct = {
      avatar: {
        compressed: product.avatar.compressed,
        original: product.avatar.original,
      },
      createdBy: {
        authorName: product.created_by.display_name,
      },
      initialPrice: product.initial_price,
      name: product.name,
      productId: product.product_id,
      quantity: product.quantity,
      quantityAvailable: product.quantity_available,
    };

    return newObj;
  });

  return adapterArr;
};
