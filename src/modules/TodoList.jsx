import React from "react";

const TodoList = () => {
    return (
        <ul className="w-[500px] flex bg-white p-5 rounded-md mx-auto mt-10">
            <li className="flex items-center">
                <div className="flex items-center gap-2">
                    <strong>1</strong>
                    <p>todo</p>
                </div>
                <div className="w-[425px] flex items-center justify-end gap-1">
                    <button className="duration-220 p-2 rounded-md cursor-pointer hover:bg-yellow-100">
                        <a href="#">
                            <img
                                className="w-[25px]"
                                src="src/assets/icons/pencil-square.svg"
                                alt="pen"
                            />
                        </a>
                    </button>
                    <button className="duration-220 p-2 rounded-md cursor-pointer hover:bg-red-100">
                        <a href="#">
                            <img
                                className="w-[25px]"
                                src="src/assets/icons/trash.svg"
                                alt="trash"
                            />
                        </a>
                    </button>
                    <button className="duration-220 rounded-[100%] w-[30px] h-[30px] border-2 border-solid ">
                        <a href="#">
                            <img src="src/assets/imgs/result.png" alt="true" />
                        </a>
                    </button>
                </div>
            </li>
        </ul>
    );
};

export default TodoList;
