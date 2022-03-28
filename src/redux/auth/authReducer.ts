import { AdminUser } from "./../../types/Admin";
import { Reducer } from "redux";
import * as AuthTypes from "./authTypes";
import { AppDispatchProps } from "../../types";

interface AuthState {
  auth: boolean;
  loading: boolean;
  loginerror: string;
  user: AdminUser;
}

const initalState: AuthState = {
  auth: false,
  loading: false,
  loginerror: "",
  user: null as any,
};

const reducer: Reducer<AuthState, AppDispatchProps> = (
  state = initalState,
  action
) => {
  switch (action.type) {
    case AuthTypes.LOGIN_SUCCESS:
      return {
        ...state,
        auth: true,
        loading: false,
        loginerror: "",
        user: action.payload,
      };
    case AuthTypes.LOGGING_IN:
      return {
        ...state,
        auth: false,
        loading: true,
        loginerror: "",
        user: null as any,
      };
    case AuthTypes.LOGIN_COMPLETED:
      return {
        ...state,
        loading: false,
      };
    case AuthTypes.LOGIN_FAILED:
      return {
        ...state,
        auth: false,
        loading: false,
        user: null as any,
        loginerror: action.payload,
      };
    case AuthTypes.CLEAR_LOGIN_ERROR:
      return {
        ...state,
        loginerror: "",
        loading: false,
      };
    case AuthTypes.LOGOUT:
      return {
        ...state,
        auth: false,
        loading: false,
        user: null as any,
        loginerror: "",
      };
    default:
      return state;
  }
};

export default reducer;
