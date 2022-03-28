/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import { uuid } from "uuidv4";
import { toastr } from "../../components/notification/notify";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { createTodo } from "../../redux/todo/todoAction";
import TextArea from "../../components/textarea/TextArea";
import Button from "../../components/button/Button";
import TodoList from "../../components/TodoList/TodoList";
import { Itodos } from "../../types";

const Todos = () => {
  const dispatch = useAppDispatch();
  const { success, loading }: Itodos = useAppSelector((state) => state.todos);

  const [todo, setTodo] = useState("");

  const handleTodo = () => {
    if (!todo) return toastr.error("Todo is required");
    const data = { title: todo, id: uuid(), isCompleted: false };
    dispatch(createTodo(data));
  };

  useEffect(() => {
    if (!loading && success) {
      setTodo("");
    }
  }, [loading, success]);

  return (
    <MainWrapper>
      <div className="row" style={{ marginTop: "40px" }}>
        <div className="col-12 col-md-9">
          <div className="card card-white">
            <div className="card-body">
              <form>
                <TextArea
                  name="todo"
                  label="Enter Todo"
                  value={todo}
                  onChange={(e: any) => setTodo(e.target.value)}
                  rows={5}
                  maxLength={100}
                  placeholder="Type here..."
                  className="form-control add-task shadow-none"
                />
                <div className="my-2">
                  <Button
                    onClick={handleTodo}
                    type="button"
                    className="btn bg-primary-blue text-white shadow-none"
                  >
                    {loading ? (
                      <i className="fa fa-spin fa-spinner" />
                    ) : (
                      <i className="fa fa-plus" />
                    )}{" "}
                    Add Todo
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <div className="todo-list mt-3">
            <TodoList />
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};

export default Todos;
