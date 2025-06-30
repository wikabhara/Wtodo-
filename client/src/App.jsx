import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen w-full bg-base-100 flex flex-col">
      <div className="w-full bg-base-200 shadow-md px-6 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-primary">Todo App</h1>
        </div>
      </div>

      {/* Main content */}
      <div className="flex w-full flex-col">
        <div className="card bg-base-300 rounded-box grid h-20 place-items-center">
          content
        </div>
        <div className="divider"></div>
        <div className="card bg-base-300 rounded-box grid h-20 place-items-center">
          content
        </div>
      </div>
    </div>
  );
}

export default App;
