import { USERS } from "../constant/users";

const initialState = {
  users: [],
  fetched: false,
  fetching: false,
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS.GET_USERS_FULFILLED:
      return {
        ...state,
        users: action.payload,
        fetched: true,
        fetching: false,
        error: null,
      };
    case USERS.GET_USERS_PENDING:
      return { ...state, fetching: true, fetched: false, error: null };
    case USERS.GET_USERS_REJECTED:
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
