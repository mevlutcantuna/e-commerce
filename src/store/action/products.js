import { PRODUCTS } from "../constant/products";
import axios from "axios";

export const getProducts = () => {
  return {
    type: PRODUCTS.GET_PRODUCTS,
    payload: axios.get("http://localhost:3004/products", {}),
  };
};
