import { USER } from "../constant/user";

const userReducer = (state = { user: [] }, action) => {
  switch (action.type) {
    case USER.GET_USER_FULFILLED:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default userReducer;
