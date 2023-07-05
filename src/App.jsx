import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  addTodo,
  clearTodo,
  deleteTodo,
  deleteTodoSelectedTodo,
} from "./fetaures/todo/tododReducer";
import Input from "./Input";

function App() {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  console.log(todo);

  return (
    <div>
      <h1>Hello</h1>
      <Input />
      <button onClick={() => dispatch(addTodo("hello"))}>
        ➕
      </button>
      <button onClick={() => dispatch(deleteTodo())}>
        ❌
      </button>
      <button onClick={() => dispatch(clearTodo())}>
        🧹
      </button>

      {todo?.map((el, id) => (
        <div key={id}>
          <h3>{el}</h3>
          <button
            onClick={() =>
              dispatch(deleteTodoSelectedTodo(el))
            }
          >
            🛒
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
