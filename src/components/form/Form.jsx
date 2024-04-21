import { useState } from "react";
import css from "./Form.module.css";

const Form = ({ putTodo }) => {
  const [value, setValue] = useState("");
  return (
    <form
      className={css.form}
      onSubmit={(e) => {
        e.preventDefault(), putTodo(value), setValue("");
      }}
    >
      <input
        type="text"
        placeholder="Write your task:"
        className={css.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button className={css.button} type="submit">
        ADD{" "}
      </button>
    </form>
  );
};

export default Form;
