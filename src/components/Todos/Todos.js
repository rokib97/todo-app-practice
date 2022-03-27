import React from "react";
import Todo from "../../Todo/Todo";
import "./Todos.css";

const Todos = ({ todos, onRemoveTodo }) => {
  return (
    <section className="todos">
      {todos.map((todo) => (
        <Todo
          todo={todo.todo}
          key={todo.id}
          id={todo.id}
          onRemoveTodo={onRemoveTodo}
        />
      ))}
    </section>
  );
};

export default Todos;
