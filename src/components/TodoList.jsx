import React from "react";
import Form from "./Form";
import Todos from "./Todos";

const TodoList = () => {
  return (
    <div>
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form />
      <Todos />
    </div>
  );
};

export default TodoList;
