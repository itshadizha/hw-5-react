import Checkbox from "../checkbox/Checkbox";
import Clear from "../clear btn/Clear";
import Complete from "../complete btn/Complete";
import Form from "../form/Form";
import Info from "../info/Info";
import Uncomplete from "../uncomplete btn/Uncomplete";
import css from "./Wrapper.module.css";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

const Wrapper = () => {
  const [todos, setTodos] = useState([]);
  const [allTodos, setAllTodos] = useState(0);
  const [allComplete, setAllComplete] = useState(0);
  const [allUncomplete, setAllUncomplete] = useState(0);

  const putTodo = (value) => {
    if (value) {
      const newTodo = { id: Date.now(), text: value, done: false };
      setTodos([...todos, newTodo]);
      setAllTodos((prevAllTodos) => prevAllTodos + 1);
      setAllUncomplete((prevAllUncomplete) => prevAllUncomplete + 1);
    } else {
      alert("Write task!");
    }
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== id) return todo;

      const updatedTodo = { ...todo, done: !todo.done };
      if (updatedTodo.done) {
        setAllComplete((prevAllComplete) => prevAllComplete + 1);
        setAllUncomplete((prevAllUncomplete) => prevAllUncomplete - 1);
      } else {
        setAllComplete((prevAllComplete) => prevAllComplete - 1);
        setAllUncomplete((prevAllUncomplete) => prevAllUncomplete + 1);
      }
      return updatedTodo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
      setAllTodos((prevAllTodos) => prevAllTodos - 1);
      if (filteredTodos.length < prevTodos.length) {
        const removedTodo = prevTodos.find((todo) => todo.id === id);
        if (removedTodo.done) {
          setAllComplete((prevAllComplete) => prevAllComplete - 1);
        } else {
          setAllUncomplete((prevAllUncomplete) => prevAllUncomplete - 1);
        }
      }
      return filteredTodos;
    });
  };

  const clearTodos = () => {
    setTodos([]);
    setAllTodos(0);
    setAllComplete(0);
    setAllUncomplete(0);
  };

  const completeAll = () => {
    const updatedTodos = todos.map((todo) => ({ ...todo, done: true }));
    setTodos(updatedTodos);
    setAllComplete(todos.length);
    setAllUncomplete(0);
  };

  const uncompleteAll = () => {
    const updatedTodos = todos.map((todo) => ({ ...todo, done: false }));
    setTodos(updatedTodos);
    setAllComplete(0);
    setAllUncomplete(todos.length);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <h1 className={css.title}>TodoList</h1>
        <Form putTodo={putTodo} />
        <div className={css.buttons}>
          <Complete onClick={completeAll} />
          <Uncomplete onClick={uncompleteAll} />

          <Clear onClick={clearTodos} />
        </div>
        <ul className={css.todos}>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={todo.done ? `${css.todo} ${css.done}` : `${css.todo}`}
            >
              {todo.text}
              <div className={css.icons}>
                <div style={{ backgroundColor: "#ffffff" }}>
                  <MdDelete
                    onClick={() => removeTodo(todo.id)}
                    style={{ color: "#ec4b81" }}
                  />
                </div>
                <Checkbox
                  checked={todo.done}
                  onChange={() => toggleTodo(todo.id)}
                />
              </div>
            </li>
          ))}
        </ul>
        <Info
          allTodos={allTodos}
          allComplete={allComplete}
          allUnComplete={allUncomplete}
        />
      </div>
    </div>
  );
};

export default Wrapper;
