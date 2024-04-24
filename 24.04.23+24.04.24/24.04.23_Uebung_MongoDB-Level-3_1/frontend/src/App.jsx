import "./App.css";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage/HomePage";
import AddMoviePage from "./pages/AddMoviePage/AddMoviePage";
import DetailPage from "./pages/DetailPage/DetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import { FetchMoviesContext } from "./context/Context";

function App() {
  const [movies, setMovies] = useState("");

  return (
    <>
      <FetchMoviesContext.Provider value={{ movies, setMovies }}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-movie" element={<AddMoviePage />} />
            <Route path="/movies/:movieId" element={<DetailPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </FetchMoviesContext.Provider>
    </>
  );
}

export default App;
