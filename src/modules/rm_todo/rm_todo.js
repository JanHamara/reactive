import './rm_todo.css';

function ReactiveToDo() {
   

  return (
    <div className="rm-todo">
        {/* This will be replaced by heading component */}
        <h1>To Do</h1>

        <div className="rm-todo-component">
            <input type="text" class="rm-todo-input" value={todoInput}></input>
        </div>
    </div>
  );
}

export default ReactiveToDo;