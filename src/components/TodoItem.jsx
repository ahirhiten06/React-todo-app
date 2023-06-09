import { useEffect, useRef, useState } from "react";

const TodoItem = ({ todo, handleChange, handleDelete, sendNewTodo }) => {
  const [isEditing, setisEditing] = useState(false);
  const [newTodoName, setNewTodoName] = useState("");

  const EditFieldref = useRef();
  const EditButtonref = useRef();

  useEffect(() => {
    if (isEditing) {
      return EditFieldref.current.focus();
    }
  }, [isEditing]);

  const handleNewName = (e) => {
    setNewTodoName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodoName === "") return;
    sendNewTodo(newTodoName, todo.id);
    setisEditing(false);
    setNewTodoName("");
  };

  const listForm = (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="m-auto block my-2 p-2"
          value={newTodoName}
          onChange={handleNewName}
          type="text"
          ref={EditFieldref}
        />
        <div className="flex justify-evenly">
          <button
            className="px-4 py-2 bg-zinc-800 text-white rounded-sm "
            type="submit"
          >
            save
          </button>
          <button
            className="px-4 py-2 bg-zinc-800 text-white rounded-sm "
            onClick={() => setisEditing(false)}
          >
            cancel
          </button>
        </div>
      </form>
    </>
  );
  const listContent = (
    <li className="m-2 ">
      <div className="flex w-full gap-6  mb-4">
        <input
          className="w-6 rounded-full bg-blue text-white relative accent-zinc-800"
          onChange={() => handleChange(todo.id)}
          type="checkbox"
          checked={todo.completed}
        />
        <label htmlFor="todoname">
          <span
            id="todoname"
            className={`${todo.completed ? "line-through" : "" + ""} text-2xl`}
          >
            {todo.name}
          </span>
        </label>
      </div>
      <div className="flex w-full gap-3 justify-between">
        <button
          className="px-4 py-2  w-full bg-zinc-800 text-white rounded-sm "
          onClick={() => setisEditing(true)}
          ref={EditButtonref}
        >
          edit
        </button>
        <button
          className="px-4 py-2 w-full bg-red-600 text-white rounded-sm "
          onClick={() => handleDelete(todo.id)}
        >
          delete
        </button>
      </div>
    </li>
  );
  return isEditing ? listForm : listContent;
};

export default TodoItem;
