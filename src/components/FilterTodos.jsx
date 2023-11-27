import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, completeTodo } from "../features/todoSlice";

const FilterTodos = () => {
  const todos = useSelector((state) => state.todoReducer.todo);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleComplete = (id) => {
    dispatch(completeTodo(id));
  };

  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {todos &&
            todos.map((todo) => {
              const { id, todoText, complete } = todo;
              return (
                <div className={complete ? "todo complete" : "todo "} key={id}>
                  <li className="todo-item">{todoText}</li>
                  <button
                    className="complete-btn"
                    onClick={(e) => handleComplete(id)}
                  >
                    <i className="fas fa-check"></i>
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(id)}
                  >
                    <i className="fa-regular fa-trash-can"></i>
                  </button>
                </div>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default FilterTodos;
