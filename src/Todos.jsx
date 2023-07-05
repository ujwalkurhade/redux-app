import React from "react";
import { useSelector } from "react-redux";
const Todos = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      <h1>Todoss</h1>
      <ul>
        {todos?.map((todo, index) => (
          <li key={index}>
            <span>{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
