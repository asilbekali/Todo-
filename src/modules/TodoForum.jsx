import React, { useRef } from 'react'

const TodoForum = ({ setTodo, todos }) => {

  const inputRef = useRef()

  function handleAddTodo(e) {
    e.preventDefault()
    const todo = {
      id: todos[todos.length - 1]?.id ? todos[todos.length - 1]?.id + 1 : 1,
      value: e.target.todoValue.value,
      isCOmpleted: false
    }
    setTodo([...todos, todo])
    e.target.reset()
  }

  return (
    <form onSubmit={handleAddTodo} autoComplete='off' className='w-[500px] p-5 flex items-center justify-between  rounded-md bg-white mx-auto mt-10'>
      <input ref={inputRef} required className='w-[79%] py-3 pl-2 rounded-md border-[1px] border-slate-500' type="text" placeholder='Enter todo...' name='todoValue' />
      <button type='submit' className='w-[19%] py-[13.5px] font-bold  bg-[#483d8b] text-white rounded-md cursor-pointer duration-220 hover:bg-green-600'>Add Todo</button>
    </form>
  )
}

export default TodoForum