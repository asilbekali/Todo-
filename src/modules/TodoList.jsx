import React, { useState } from "react";

const TodoList = ({ todos, setTodos }) => {
  const handleUpdateClick = (id) => {
    const newValue = prompt("Update your todo:");
    if (newValue) {
      setTodos((prevTodos) =>
        
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, value: newValue } : todo
        )
      );
    }
  };

  const handleDeleteClick = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleCheckboxChange = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <ul className="w-[500px] flex bg-white p-5 rounded-md mx-auto mt-10 flex-col">
      {todos.map((item) => (
        <li
          key={item.id}
          className={`flex items-center ${
            item.isCompleted ? "opacity-50" : ""
          }`}
        >
          <div className="flex items-center gap-2">
            <strong>{item.id}</strong>
            <p>{item.value}</p>
          </div>
          <div className="w-[425px] flex items-center justify-end gap-1">
            <button
              className="duration-220 p-2 rounded-md cursor-pointer hover:bg-yellow-100"
              onClick={() => handleUpdateClick(item.id)}
            >
              <img
                className="w-[25px]"
                src="src/assets/icons/pencil-square.svg"
                alt="pen"
              />
            </button>
            <button
              className="duration-220 p-2 rounded-md cursor-pointer hover:bg-red-100"
              onClick={() => handleDeleteClick(item.id)}
            >
              <img
                className="w-[25px]"
                src="src/assets/icons/trash.svg"
                alt="trash"
              />
            </button>
            <label>
              <input
                className="check-input hidden"
                type="checkbox"
                checked={item.isCompleted}
                onChange={() => handleCheckboxChange(item.id)}
              />
              <div
                className={`check-wrapper duration-220 mb-1 cursor-pointer rounded-[100%] w-[25px] h-[25px] border-2 border-solid flex items-center justify-center`}
              >
                <img
                  className={item.isCompleted ? "" : "hidden"}
                  src="src/assets/imgs/result.png"
                  alt="true"
                />
              </div>
            </label>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
