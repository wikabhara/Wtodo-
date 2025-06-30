import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="w-full border border-red-500">
      <div className="min-h-screen bg-base-100 flex flex-col">
        {/* Navbar Full Width */}
        <div className="w-full bg-base-200 shadow-md px-6 py-3">
          <div className="navbar p-0">
            <a className="btn btn-ghost text-xl">Todo App</a>
          </div>
        </div>

        {/* Konten utama */}
        <div className="w-full flex gap-4 px-6 py-6">
          <div className="flex-1 card bg-base-300 rounded-box h-32 grid place-items-center">
            content 1
          </div>
          <div className="flex-1 card bg-base-300 rounded-box h-32 grid place-items-center">
            content 2
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
