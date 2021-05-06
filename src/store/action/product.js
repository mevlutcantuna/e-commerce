import { GETPRODUCT } from "../constant/product";
import axios from "axios";

export const getProduct = (productId) => {
  return {
    type: GETPRODUCT.GET_PRODUCT,
    payload: axios.get(`http://localhost:3004/products?id=${productId}`),
  };
};
