import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import { deleteNewTodo } from "../../redux/todo/todoAction";
import { Itodo } from "../../types";
import Button from "../button/Button";
import { CenterLoader } from "../Loaders/CenterLoader";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, loading } = useAppSelector((state) => state.todos);

  const [allTodo, setAllTodo] = useState<Itodo[]>([]);

  useEffect(() => {
    setAllTodo(todos);
  }, [todos]);

  const handleDelete = (id: string) => {
    const newTodo = allTodo.filter((todo) => todo.id !== id);
    setAllTodo(newTodo);
    dispatch(deleteNewTodo(newTodo));
  };

  return (
    <>
      {loading === false && allTodo.length === 0 ? (
        <div>
          <img src="/404.gif" alt="" height={300} />
        </div>
      ) : allTodo.length > 0 ? (
        allTodo.map((todo: any, i: number) => (
          <div key={todo.id} className="todo-item">
            <div className="checker">
              <div>
                <input type="checkbox" />
              </div>
              <div className="todo-text">{todo.title}</div>
            </div>
            <div>
              <Button
                type="button"
                className="btn btn-sm btn-outline-dark mx-1"
              >
                <i className="fa fa-edit" />
              </Button>
              <Button
                onClick={() => handleDelete(todo.id)}
                type="button"
                className="btn btn-sm bg-red text-white mx-1"
              >
                <i className="fa fa-trash" />
              </Button>
            </div>
          </div>
        ))
      ) : (
        <CenterLoader />
      )}
    </>
  );
};

export default TodoList;
