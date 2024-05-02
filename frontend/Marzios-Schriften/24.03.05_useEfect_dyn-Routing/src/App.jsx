import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseEffect from "./pages/UseEffect/UseEffect";
import Fetch from "./pages/Fetch/Fetch";
import Header from "./components/Header/Header";
import DetailPage from "./pages/DetailPage/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<UseEffect />} />
        <Route path="/fetch" element={<Fetch />} />

        {/* name dem : ist der key im Object was wir uns rausziehen könnne  von useParams*/}
        {/* Wie das name dem : heißt ist uns überlassen (sollte sinn machen) */}
        {/* : muss sein, damit sagen wir es kommt nun eine dynamische route */}
        <Route path="/fetch/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
