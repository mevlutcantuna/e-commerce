import { combineReducers } from "redux";
import signupReducer from "./signUp";
import usersReducer from "./users";
import signinReducer from "./signIn";
import userReducer from "./user";
import productsReducer from "./products";
import productReducer from "./product";
import basketReducer from "./basket";

export default combineReducers({
  signupReducer,
  usersReducer,
  signinReducer,
  userReducer,
  productsReducer,
  productReducer,
  basketReducer,
});
