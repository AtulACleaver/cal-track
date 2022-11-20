import "../css/main.css";
import "../css/Todolist.css";

function Todolist() {
  return (
    <div className="todolist">
      <div className="todolist-container">
        <h1 className="todolist-title">To Do List</h1>
        <div className="todolist-input">
          <button className="todolist-button">Add Task</button>
          <button className="todolist-button">Connect with Google</button>
        </div>
        <div className="todolist-card">
          <div className="todolist-list">
            <div className="todolist-list-item">No todo-item</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todolist;
