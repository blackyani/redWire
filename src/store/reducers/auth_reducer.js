import {AUTH_USER, CLEAR_ERROR} from "../types";

const INITIAL_STATE = {
  user: [],
  isAuth: false,
  error: null,
};

export default function (state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case AUTH_USER:
      return {...state, ...payload}
    case CLEAR_ERROR:
      return {...state, error: null}
    default:
      return state;
  }
}
