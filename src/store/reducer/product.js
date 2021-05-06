import { GETPRODUCT } from "../constant/product";

const productReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case GETPRODUCT.GET_PRODUCT_FULFILLED:
      return { ...state, product: action.payload };
    default:
      return state;
  }
};

export default productReducer;
