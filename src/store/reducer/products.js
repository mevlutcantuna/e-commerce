import { PRODUCTS } from "../constant/products";

const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS.GET_PRODUCTS_FULFILLED:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
