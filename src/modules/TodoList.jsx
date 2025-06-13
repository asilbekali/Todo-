import React from "react";

const TodoList = ({ todos }) => {
  const handleUpdateClick = (id) => {
    alert(`Update button clicked for Todo ID: ${id}`);
  };

  return (
    <ul className="w-[500px] flex bg-white p-5 rounded-md mx-auto mt-10 flex-col">
      {todos.map((item) => (
        <li key={item.id} className="flex items-center">
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
            <button className="duration-220 p-2 rounded-md cursor-pointer hover:bg-red-100">
              <img
                className="w-[25px]"
                src="src/assets/icons/trash.svg"
                alt="trash"
              />
            </button>
            <label>
              <input className="check-input hidden" type="checkbox" />
              <div
                className={`check-wrapper duration-220 mb-1 cursor-pointer rounded-[100%] w-[25px] h-[25px] border-2 border-solid`}
              >
                <img
                  className="hidden"
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
