import { Dispatch } from "react";
import { toastr } from "../../components/notification/notify";
import { Itodo } from "../../types";
import * as TodoTypes from "./todoTypes";

export const createTodo =
  (data: Itodo) =>
  async (dispatch: Dispatch<{ type: string; payload?: any }>) => {
    try {
      dispatch({ type: TodoTypes.ADDING_TODO });

      setTimeout(() => {
        dispatch({ type: TodoTypes.ADD_TODO_SUCCESS, payload: data });
        toastr.success("Added Successful");
      }, 2000);
    } catch (error) {
      dispatch({
        type: TodoTypes.ADD_TODO_FAIL,
        payload: "oops !!! something went wrong, please try again.",
      });
    }
  };

export const deleteNewTodo =
  (todos: Itodo[]) =>
  async (dispatch: Dispatch<{ type: string; payload?: any }>) => {
    dispatch({ type: TodoTypes.DELETING_TODO });
    try {
      setTimeout(() => {
        dispatch({ type: TodoTypes.DELETE_TODO_SUCCESS, payload: todos });
        toastr.success("Deleted Successful");
      }, 2000);
    } catch (error) {
      dispatch({
        type: TodoTypes.DELETE_TODO_FAIL,
        payload: "oops! something went wrong!",
      });
    }
  };
