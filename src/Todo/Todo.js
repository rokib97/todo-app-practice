import React from "react";
import "./Todo.css";

const Todo = ({ todo, id, onRemoveTodo }) => {
  const { title, desc } = todo;
  const handleClick = (id) => {
    onRemoveTodo(id);
  };
  return (
    <article className="todo">
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div>
        <button className="btn" onClick={() => handleClick(id)}>
          <i className="fa fa-trash fa-2x"></i>
        </button>
      </div>
    </article>
  );
};

export default Todo;
