import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "../App.css";
import TodoCard from "../components/TodoCard";
import Navbar from "../components/Navbar";

function Home() {
  const [todos, setTodos] = useState([]);
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
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  }

  async function createTodo(event) {
    event.preventDefault();
    const newId =
      todos.length > 0 ? String(parseInt(todos.at(-1).id) + 1) : "1";
    const newTodo = {
      id: newId,
      title: title,
      task: task,
      status: status,
    };
    await fetch("http://localhost:3000/todos", {
      method: "POST",
      body: JSON.stringify(newTodo),
    });

    setTodos([...todos, newTodo]);
  }

  async function deleteTodo(id) {
    try {
      const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "GET",
      });
      const foundTodo = await response.json();
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:3000/todos/${foundTodo.id}`, {
            method: "DELETE",
          });
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "You have Successfully remove the selected task :)",
          });
          fetchTodos();
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong, failed to delete item :(",
      });
    }
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      {/* NavBar */}

      {/* Input Field */}
      <div className="flex w-full flex-col">
        {/* Form Create */}
        <div className="card bg-base-300 rounded-box grid place-items-center">
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
        </div>
        {/* Form Create end*/}

        <div className="divider"></div>

        {/* TodoCard */}
        <div className="card bg-base-300 rounded-box grid place-items-center">
          <div className="flex-row flex-wrap py-10 gap-6">
            {todos.map((t) => (
              <TodoCard
                key={t.id}
                title={t.title}
                task={t.task}
                status={t.status}
                onDelete={() => deleteTodo(t.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
