import React, { useState } from "react";
import "./App.css";
import TodoForum from "./modules/TodoForum";
import TodoList from "./modules/TodoList";

function App() {

  const [todos, setTodo] = useState([])

  return (
    <>
      <TodoForum setTodo={setTodo} todos={todos} />
      <TodoList todos={todos} setTodos={setTodo}/>
    </>
  );
}

export default App;
