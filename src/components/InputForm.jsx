import React from "react";
import { useState } from "react";

const InputForm = ({ addNewPost }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <form>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Enter your task...."
        value={inputValue}
      ></input>
      <button
        onClick={(e) => {
          addNewPost(e, inputValue);
          setInputValue("");
        }}
      >
        Submit!
      </button>
    </form>
  );
};

export default InputForm;
