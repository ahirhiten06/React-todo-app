import React, { useEffect, useRef, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterButton from "./components/FilterButton";
import "./index.css";

const App = () => {
  const filter = {
    all: () => true,
    active: (todo) => !todo.completed,
    completed: (todo) => todo.completed,
  };
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  const [filterName, setFilterName] = useState("all");

  const sendTodo = (name) => {
    const newTodo = { id: crypto.randomUUID(), name, completed: false };
    setTodos((oldTodos) => [...oldTodos, newTodo]);
    localStorage.setItem("TODOS", JSON.stringify(todos));
  };

  const fltbtns = Object.keys(filter).map((name) => (
    <FilterButton key={name} setFilterName={setFilterName} name={name} />
  ));

  const handleChange = (id) => {
    const newTodoList = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodoList);
  };

  const handleDelete = (id) => {
    const newTodoList2 = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList2);
  };

  const sendNewTodo = (name, id) => {
    const newTodoList = todos.map((todo) =>
      todo.id === id ? { ...todo, name } : todo
    );
    setTodos(newTodoList);
  };

  const filteredTodo = todos.filter(filter[filterName]);
  const remainingTodo = filteredTodo.filter((todo) => !todo.completed).length;

  return (
    <div className="m-auto w-full p-6 max-w-2xl grid items-center justify-center ">
      <TodoForm sendTodo={sendTodo} />
      <div className="flex gap-4 items-center justify-center">{fltbtns}</div>
      <h4 className="text-center text-zinc-900 text-lg m-2 ">
        {remainingTodo} remains
      </h4>
      <TodoList
        todos={filteredTodo}
        handleChange={handleChange}
        handleDelete={handleDelete}
        sendNewTodo={sendNewTodo}
      />
    </div>
  );
};

export default App;
