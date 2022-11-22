import "../css/main.css";
import "../css/Todolist.css";
import { useState, useRef, useEffect } from "react";
import TodoList from "./Todochecklist.jsx";
import { v4 as uuidv4 } from "uuid";
import React from 'react';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function Todolist() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const keyDownHandler = (event) => {
      console.log("User pressed: ", event.key);

      if (event.key === "Enter") {
        event.preventDefault();

        handleAddTodo();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <div className="todolist">
      <div className="todolist-container">
        <h1 className="todolist-title">To Do List</h1>
        <div className="todolist-card">
          <div className="todolist-buttons">
            <input
              type="text"
              className="todolist-input"
              placeholder="Add Task"
              ref={todoNameRef}
            />
            <button className="todolist-button" onClick={handleAddTodo}>
              Add
            </button>
            <button className="todolist-button" onClick={handleClearTodos}>
              Clear
            </button>
          </div>
          <div className="todolist-list">
            <TodoList todos={todos} toggleTodo={toggleTodo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todolist;
