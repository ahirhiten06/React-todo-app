import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleChange, handleDelete, sendNewTodo }) => {
  return (
    <ul className="bg-gray-100 p-2">
      {todos.map((todo) => (
        <TodoItem
          handleChange={handleChange}
          sendNewTodo={sendNewTodo}
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
