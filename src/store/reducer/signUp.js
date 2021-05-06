import { SIGNUP } from "../constant/signUp";

const initialState = {
  username: "",
  password: "",
  email: "",
  fetched: false,
  fetching: false,
  error: null,
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP.HANDLE_USERNAME:
      return { ...state, username: action.payload };
    case SIGNUP.HANDLE_EMAIL:
      return { ...state, email: action.payload };
    case SIGNUP.HANDLE_PASSWORD:
      return { ...state, password: action.payload };
    case SIGNUP.POST_USER_FULFILLED:
      return {
        ...state,
        username: "",
        password: "",
        email: "",
        fetched: true,
        fetching: false,
        error: null,
      };
    case SIGNUP.POST_USER_PENDING:
      return { ...state, fetching: true, fetched: false, error: null };
    case SIGNUP.POST_USER_REJECTED:
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: true,
      };
    default:
      return state;
  }
};

export default signupReducer;
