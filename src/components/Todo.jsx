import '../css/Todolist.css'
import React from 'react';

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }
  
  return (
    <div>
      <label className="todos">
        <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
        <span class="checkmark"></span>
        {todo.name}
      </label>
    </div>
  )
}