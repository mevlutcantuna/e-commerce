import axios from "axios";
import { USERS } from "../constant/users";

export const getUsers = () => {
  return {
    type: USERS.GET_USERS,
    payload: axios.get("http://localhost:3004/users", {}),
  };
};
