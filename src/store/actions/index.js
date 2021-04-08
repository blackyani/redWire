import * as api from '../api';
import {AUTH_USER, CLEAR_ERROR} from "../types";

export const registerUser = (value) => {
  return  {
    type: AUTH_USER,
    payload: api.registerUser(value)
  }
}
