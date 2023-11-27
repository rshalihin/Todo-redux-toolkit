import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

const Form = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 10000 + 1),
      todoText: inputText,
      complete: false,
    };
    dispatch(addTodo(newTodo));
    setInputText("");
  };

  return (
    <form className="todo-form">
      <input
        type="text"
        className="todo-input"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button type="submit" className="todo-button" onClick={handleSubmit}>
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
};

export default Form;
