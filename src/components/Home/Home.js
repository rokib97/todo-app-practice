import React from "react";
import NewTodo from "../NewTodo/NewTodo";
import Todos from "../Todos/Todos";
import "./Home.css";
const Home = () => {
  const dummyTodos = [
    {
      id: 1,
      title: "todo title 1",
      desc: "todo desc1 is here",
    },
    {
      id: 2,
      title: "todo title 2",
      desc: "todo desc2 is here",
    },
  ];
  return (
    <div className="container">
      <h1 style={{ color: "white" }}>Todo App</h1>
      <NewTodo />
      <Todos todos={dummyTodos} />
    </div>
  );
};

export default Home;
