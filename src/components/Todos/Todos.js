import React from "react";
import Todo from "../../Todo/Todo";
import "./Todos.css";

const Todos = ({ todos }) => {
  return (
    <section className="todos">
      {todos.map((todo) => (
        <Todo todo={todo.todo} key={todo.id} />
      ))}
    </section>
  );
};

export default Todos;
