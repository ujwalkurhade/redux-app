import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./fetaures/todo/tododReducer";

function Input() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addTodo(value));
    setValue("");
  };
  return (
    <div>
      <label htmlFor="">Enter A text</label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleAdd}>➕</button>
    </div>
  );
}

export default Input;
