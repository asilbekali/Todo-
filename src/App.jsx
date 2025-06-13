import React, { useState } from "react";
import "./App.css";
import TodoForum from "./modules/TodoForum";
import TodoList from "./modules/TodoList";

function App() {

  const [todo, setTodo] = useState([])

  return (
    <>
      <TodoForum setTodo={setTodo} todo={todo} />
      <TodoList />
    </>
  );
}

export default App;
