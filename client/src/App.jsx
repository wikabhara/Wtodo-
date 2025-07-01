import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoCard from "./components/TodoCard";

function App() {
  const [Todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("OPEN");

  async function fetchTodos() {
    try {
      const response = await fetch("http://localhost:3000/todos", {
        method: "GET",
      });
      const result = await response.json();
      console.log(result);
      setTodos(result);
    } catch (error) {
      console.log(error);
    }
  }

  async function createTodo(event) {
    event.preventDefault();
    console.log(title, task, status);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <div className="w-full bg-base-200 shadow-md px-6 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-primary">Todo App</h1>
        </div>
      </div>

      {/* Input Field */}
      <div className="flex w-full flex-col">
        <div className="card bg-base-300 rounded-box grid place-items-center">
          {/* Form Create */}
          <form
            onSubmit={createTodo}
            action=""
            className="flex-row flex-wrap py-10 gap-6">
            <h1>Create Todo</h1>
            <label className="input">
              <span className="label">Title</span>
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text"
                placeholder="Type title here..."
              />
            </label>
            <div>
              <label className="input">
                <span className="label">Task</span>
                <input
                  onChange={(e) => setTask(e.target.value)}
                  value={task}
                  type="text"
                  placeholder="Type your task here..."
                />
              </label>
            </div>
            <label className="select">
              <span className="label">Status</span>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}>
                <option value="OPEN">OPEN</option>
                <option value="ONGOING">ONGOING</option>
                <option value="COMPLETED">COMPLETED</option>
              </select>
            </label>
            <button className="btn btn-primary">Submit</button>
          </form>
          {/* Form Create end*/}
        </div>
        <div className="divider"></div>

        {/* TodoCard */}
        <div className="card bg-base-300 rounded-box grid place-items-center">
          <div className="flex-row flex-wrap py-10 gap-6">
            {Todos.map((t) => (
              <TodoCard
                key={t.id}
                title={t.title}
                task={t.task}
                status={t.status}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
