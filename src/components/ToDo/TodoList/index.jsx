import React from "react";
import TodoItem from "../TodoItem";

const TodoList = ({ todos, setTodos, id }) => {
  return (
    <ul>
      {todos.map((task) => (
        <TodoItem key={id} {...task} setTodos={setTodos} todos={todos} />
      ))}
    </ul>
  );
};

export default TodoList;
