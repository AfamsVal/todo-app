import { Reducer } from "redux";
import * as TodoTypes from "./todoTypes";
import { AppDispatchProps, Itodos } from "../../types";

const initalState: Itodos = {
  loading: false,
  todos: [],
  error: "",
  success: false,
  del_loading: false,
  del_error: "",
};

const reducer: Reducer<Itodos, AppDispatchProps> = (
  state = initalState,
  action
) => {
  switch (action.type) {
    case TodoTypes.ADD_TODO_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        todos: [action.payload, ...state.todos],
      };
    case TodoTypes.ADDING_TODO:
      return {
        ...state,
        loading: true,
        success: false,
        error: "",
      };
    case TodoTypes.ADD_TODO_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };

    case TodoTypes.DELETING_TODO:
      return {
        ...state,
        del_loading: true,
        del_error: "",
      };

    case TodoTypes.DELETE_TODO_SUCCESS:
      return {
        ...state,
        del_loading: false,
        del_error: "",
        todos: action.payload,
      };

    case TodoTypes.DELETE_TODO_FAIL:
      return {
        ...state,
        del_loading: false,
        del_error: action.payload,
      };
    case TodoTypes.TODO_RESET:
      return {
        loading: false,
        todos: [],
        error: "",
        success: false,
      };
    default:
      return state;
  }
};

export default reducer;
