import "./App.css";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage/HomePage";
import AddMoviePage from "./pages/AddMoviePage/AddMoviePage";
import DetailPage from "./pages/DetailPage/DetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoadingPage from "./pages/Loadingpage/Loadingpage";

// Contexts
import { FetchMoviesContext } from "./context/Context";
import { LoadingContext } from "./context/Context";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";

function App() {
  const [movies, setMovies] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <>
      <FetchMoviesContext.Provider value={{ movies, setMovies }}>
        <LoadingContext.Provider value={{ loading, setLoading }}>
          {loading ? (
            <BrowserRouter>
              <Nav />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add-movie" element={<AddMoviePage />} />
                <Route path="/movies/:movieId" element={<DetailPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          ) : (
            <LoadingPage />
          )}
        </LoadingContext.Provider>
      </FetchMoviesContext.Provider>
    </>
  );
}

export default App;
