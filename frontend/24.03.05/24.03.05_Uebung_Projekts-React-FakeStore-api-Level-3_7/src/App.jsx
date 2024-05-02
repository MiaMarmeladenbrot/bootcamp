import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./pages/Products/Products";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import DetailPage from "./pages/DetailPage/DetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />

          {/* dynamischer Link, siehe Products.jsx; wird auf DetailPage.jsx gebraucht */}
          <Route path="/products/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
