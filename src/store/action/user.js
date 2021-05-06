import { USER } from "../constant/user";
import axios from "axios";

export const getUser = (username) => {
  return {
    type: USER.GET_USER,
    payload: axios.get(`http://localhost:3004/users?username=${username}`, {}),
  };
};
