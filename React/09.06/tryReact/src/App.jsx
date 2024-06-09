import { useState } from 'react';
import './App.css'

function makeId(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const INITIAL_TODOS = [
  { id: '1', title: 'Learn React', isComplete: false },
  { id: '2', title: 'Build a Todo App', isComplete: false },
  { id: '3', title: 'Read JavaScript Documentation', isComplete: true },
  { id: '4', title: 'Write Unit Tests', isComplete: false },
  { id: '5', title: 'Implement Context', isComplete: true },
  { id: '6', title: 'Create Portfolio Website', isComplete: false },
  { id: '7', title: 'Learn TypeScript', isComplete: false },
  { id: '8', title: 'Refactor Codebase', isComplete: true },
  { id: '9', title: 'Optimize Performance', isComplete: false },
  { id: '10', title: 'Deploy to Production', isComplete: true }
];

function App() {
  const [toDos, setTodos] = useState(INITIAL_TODOS);
  const [newTodoName, setNewTodoName] = useState("");

  function removeTodo(todoId) {
    const newTodos = toDos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  }

  function addTodo(ev) {
    ev.preventDefault();

    const newTodo = {
      id: makeId(10),
      title: newTodoName,
      isComplete: false,
    };

    const newTodos = [...toDos, newTodo];
    setTodos(newTodos);
    setNewTodoName("");
  }

  const handleChange = (event) => {
    setNewTodoName(event.target.value)
  }

  function updateTodo(todoId) {
    const newTodos = toDos.map((todo) => {
      if (todoId === todo.id) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    })
    setTodos(newTodos);
  }

  const totalTodos = toDos.length;

  const completedTodos = toDos.filter((todo)=> todo.isComplete).length;

  const activeTodos = totalTodos - completedTodos;

  const precentageOfCompleted = totalTodos > 0 ? (completedTodos / totalTodos) * 100 : 0;





  return (
    <main>
      <h1>Todo App</h1>
      <p>Add Todo</p>

      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodoName}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>

      <div className="statistics">
        <p>Total Todos: {totalTodos}</p>
        <p>Completed Todos: {completedTodos}</p>
        <p>Active Todos: {activeTodos}</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${precentageOfCompleted}%` }}></div>
        </div>
      </div>

      {toDos.length === 0 ? (
        <p>No todos available</p>
      ) : (
        <ul className="todo-wrapper">
          {toDos.map((todo) => {
            return (
              <li key={todo.id} className="todo-container">
                <div className={`todo-item ${todo.isComplete ? 'completed' : ''}`}>
                  <input type='checkbox' checked={todo.isComplete}
                    onChange={() => updateTodo(todo.id)} id={todo.id} />
                  <p>{todo.title}</p>
                  <button onClick={() => removeTodo(todo.id)}>
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  )
}

export default App;
