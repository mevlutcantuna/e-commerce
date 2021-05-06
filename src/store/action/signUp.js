import { SIGNUP } from "../constant/signUp";
import axios from "axios";

export const postUser = (user) => {
  return {
    type: SIGNUP.POST_USER,
    payload: axios.post(`http://localhost:3004/users`, user, {}),
  };
};
