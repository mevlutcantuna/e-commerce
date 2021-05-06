import { SIGNIN } from "../constant/signIn";

const initialState = {
  username: "",
  password: "",
};

const signinReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN.HANDLE_USERNAME:
      return { ...state, username: action.payload };
    case SIGNIN.HANDLE_PASSWORD:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export default signinReducer;
