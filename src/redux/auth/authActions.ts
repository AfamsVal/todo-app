import { Dispatch } from "react";
import { toastr } from "../../components/notification/notify";
import * as AuthTypes from "./authTypes";

interface AuthData {
  usernameOrEmail: string;
  password: string;
}

export const login =
  (data: AuthData) =>
  async (dispatch: Dispatch<{ type: string; payload?: any }>) => {
    try {
      dispatch({ type: AuthTypes.LOGGING_IN });
      if (
        data.usernameOrEmail === "admin@gmail.com" &&
        data.password === "admin"
      ) {
        toastr.success("Login Successful");
        setTimeout(() => {
          dispatch({ type: AuthTypes.LOGIN_SUCCESS, payload: data });
        }, 2000);
      } else {
        dispatch({
          type: AuthTypes.LOGIN_FAILED,
          payload: "Invalid login credentials",
        });
      }
    } catch (error) {
      dispatch({
        type: AuthTypes.LOGIN_FAILED,
        payload: "oops !!! something went wrong, please try again.",
      });
    } finally {
      dispatch({ type: AuthTypes.LOGIN_COMPLETED });
    }
  };

export const logout =
  () => async (dispatch: Dispatch<{ type: string; payload?: any }>) => {
    dispatch({ type: AuthTypes.LOGOUT });
  };
