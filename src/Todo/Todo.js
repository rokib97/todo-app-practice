import React from "react";
import "./Todo.css";

const Todo = ({ todo }) => {
  const { title, desc } = todo;
  return (
    <article className="todo">
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div className="btn">
        <i className="fa fa-trash fa-2x"></i>
      </div>
    </article>
  );
};

export default Todo;
