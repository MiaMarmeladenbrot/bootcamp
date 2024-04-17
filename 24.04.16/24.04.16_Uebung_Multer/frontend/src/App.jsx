import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogDetailPage from "./pages/BlogDetailPage";
import AdminPage from "./pages/AdminPage";
import { useState } from "react";
import { BlogPostsContext } from "./context/Context";

function App() {
  const [blogPosts, setBlogPosts] = useState();

  return (
    <>
      <BlogPostsContext.Provider value={{ blogPosts, setBlogPosts }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts/:id" element={<BlogDetailPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </BrowserRouter>
      </BlogPostsContext.Provider>
    </>
  );
}

export default App;
