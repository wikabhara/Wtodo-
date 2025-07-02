import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import MainLayout from "./components/layout/MainLayout";
import TodoCard from "./components/TodoCard";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<TodoCard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
