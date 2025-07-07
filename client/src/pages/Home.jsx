import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "../App.css";
import { useNavigate } from "react-router";
import TodoCard from "../components/TodoCard";

function Home() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("OPEN");
  let navigate = useNavigate();

  async function fetchTodos() {
    try {
      const response = await fetch(
        "https://hulking-spiffy-duck.glitch.me/todos",
        {
          method: "GET",
        }
      );
      const result = await response.json();

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
    await fetch("https://hulking-spiffy-duck.glitch.me/todos/", {
      method: "POST",
      body: JSON.stringify(newTodo),
    });
    setTodos([...todos, newTodo]);
  }

  async function deleteTodo(id) {
    try {
      const response = await fetch(
        `https://hulking-spiffy-duck.glitch.me/todos/${id}`,
        {
          method: "GET",
        }
      );
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
          fetch(`https://hulking-spiffy-duck.glitch.me/todos/${foundTodo.id}`, {
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

  function editTodo(id) {
    navigate(`/${id}`);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      {/* NavBar */}

      {/* Input Field */}
      <div className="flex w-full flex-col">
        {/* Form-Create */}
        <div className="card bg-base-300 rounded-box grid place-items-center">
          <form
            onSubmit={createTodo}
            action=""
            className="flex-row flex-wrap py-5">
            <h1 className="pb-1.5">Create Task ToDo!</h1>
            <div className="pb-1">
              <label className="input">
                <span className="label">Title</span>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  type="text"
                  placeholder="Type title here..."
                />
              </label>
            </div>

            <div className="pb-1">
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
            <div className="pb-1">
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
            </div>

            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
        {/* Form-Create-end*/}

        <div className="divider"></div>

        {/* TodoCard */}
        <div className="card bg-base-300 rounded-box grid place-items-center">
          <div className="flex-row py-5">
            {todos.map((t) => (
              <TodoCard
                key={t.id}
                title={t.title}
                task={t.task}
                status={t.status}
                onDelete={() => deleteTodo(t.id)}
                onEdit={() => editTodo(t.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
