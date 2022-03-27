import React from "react";
import Todo from "../../Todo/Todo";
import "./Todos.css";

const Todos = ({ todos }) => {
  console.log(todos);
  return (
    <section className="todos">
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </section>
  );
};

export default Todos;
