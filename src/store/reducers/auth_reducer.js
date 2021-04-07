import {AUTH_USER} from "../types";

const INITIAL_STATE = {
  user: [],
  isAuth: false,
  error: null,
};

export default function (state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case AUTH_USER:
      return {...state, ...payload}
    default:
      return state;
  }
}
