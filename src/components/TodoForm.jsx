import React, { useEffect, useRef, useState } from "react";

const TodoForm = ({ sendTodo }) => {
  const addTodoref = useRef();
  useEffect(() => addTodoref.current.focus(), []);
  const [todoName, setTodoName] = useState("");
  const handleChange = (e) => {
    setTodoName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoName === "") return;
    sendTodo(todoName);
    setTodoName("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 my-3 justify-center">
      <input
        className="p-5 border-[5px] border-[#d8dbde]"
        value={todoName}
        onChange={handleChange}
        type="text"
        ref={addTodoref}
      />
      <button
        className="px-4 py-2 bg-gray-200 rounded-sm border-[1px] border-gray-600"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
