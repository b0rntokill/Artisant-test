import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { ApiRoute } from "../../const";
import { api } from "../../services/api";
import { ApiResponse } from "../../types/api-responce";
import { getBackendToFrontProducts } from "../../utils";

const GET_PRODUCT_DATA_FAIL_MESSAGE = "Получение списка товаров завершилось с ошибкой";

export const fetchProductsAction = createAsyncThunk("data/fetchProducts", async () => {
  try {
    const {
      data: {
        data: { products },
      },
    } = await api.get<ApiResponse>(ApiRoute.Products);
    const data = getBackendToFrontProducts(products);
    return data;
  } catch (evt) {
    toast.error(GET_PRODUCT_DATA_FAIL_MESSAGE);
    return Promise.reject(evt);
  }
});
