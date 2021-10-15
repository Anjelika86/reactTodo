import React from "react";
import TodoItem from "../TodoItem";

const TodoList = ({ todos, setTodos }) => {
  return (
    <ul>
      {todos.map((task) => (
        <TodoItem key={task.id} {...task} setTodos={setTodos} todos={todos} />
      ))}
    </ul>
  );
};

export default TodoList;
