import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UseEffect from "./pages/UseEffect/UseEffect";
import Fetch from "./pages/Fetch/Fetch";
import Header from "./components/Header/Header";
import DetailPage from "./pages/DetailPage/DetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<UseEffect />} />
          <Route path="/fetch" element={<Fetch />} />
          {/* //* Weiterführung aus fetch.jsx: dynamischer Link zu den Detailseiten der Produkte mithilfe eines key, hier /:id - der key ist dabei frei definierbar, sollte aber logischer Name sein  */}
          <Route path="/fetch/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
