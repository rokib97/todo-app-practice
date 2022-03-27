import React, { useState } from "react";
import "./NewTodo.css";
const NewTodo = () => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" name="title" value={title} />
      </div>
      <div className="form-field">
        <label htmlFor="desc">Title: </label>
        <textarea type="text" id="desc" name="desc" value={desc} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
