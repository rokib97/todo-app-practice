import React, { useState } from "react";
import "./NewTodo.css";
const NewTodo = ({ handleTodo }) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;
  const handleOnChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: event.target.value };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleTodo(todo);
    setTodo({ title: "", desc: "" });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleOnChange}
        />
      </div>
      <div className="form-field">
        <label htmlFor="desc">Desc: </label>
        <textarea
          type="text"
          id="desc"
          name="desc"
          value={desc}
          onChange={handleOnChange}
        />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
