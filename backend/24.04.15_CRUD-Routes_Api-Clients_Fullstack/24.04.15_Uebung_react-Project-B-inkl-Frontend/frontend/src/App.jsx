import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDoDetailPage from "./assets/Pages/ToDoDetailPage";
import DashboardPage from "./assets/Pages/DashboardPage";

function App() {
  return (
    <>
      <section className="wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/todos/:todoId" element={<ToDoDetailPage />} />
          </Routes>
        </BrowserRouter>
      </section>
    </>
  );
}

export default App;
