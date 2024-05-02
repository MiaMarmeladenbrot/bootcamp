import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Dog from "./pages/Dog/Dog";
import Plant from "./pages/Plant/Plant";
import Laptop from "./pages/Laptop/Laptop";
import Hobbies from "./pages/Hobbies/Hobbies";
import Social from "./pages/Social/Social";
import Coding from "./pages/Coding/Coding";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/0" element={<Dog />} />
          <Route path="/blog/1" element={<Plant />} />
          <Route path="/blog/2" element={<Laptop />} />
          <Route path="/blog/3" element={<Hobbies />} />
          <Route path="/blog/4" element={<Social />} />
          <Route path="/blog/5" element={<Coding />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
