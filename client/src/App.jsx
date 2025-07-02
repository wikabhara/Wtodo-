import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import MainLayout from "./components/layout/MainLayout";
import TodoDetail from "./pages/TodoDetail";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<TodoDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
