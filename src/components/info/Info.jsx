import React from "react";
import css from "./Info.module.css"

const Info = ({ allTodos, allComplete, allUnComplete }) => {
  return (
    <div className={css.info} >
      <span>All todos: {allTodos}</span>
      <span>Complete: {allComplete}</span>
      <span>Uncomplete: {allUnComplete}</span>

    </div>
  );
};

export default Info;
