import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NewTodo from "../NewTodo/NewTodo";
import Todos from "../Todos/Todos";
import "./Home.css";
const Home = () => {
  const [todos, setTodos] = useState([]);
  const handleTodo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), todo }];
    });
  };
  const handleRemoveTodo = (id) => {
    setTodos((prevTodo) => {
      const filteredTodo = prevTodo.filter((todo) => todo.id !== id);
      return filteredTodo;
    });
  };
  return (
    <div className="container">
      <h1 style={{ color: "white" }}>Todo App</h1>
      <NewTodo handleTodo={handleTodo} />
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
};

export default Home;
