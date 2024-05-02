import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { useParams } from "react-router-dom";
import "./BlogDetailPage.css";
import BackButton from "../components/BackButton";

const BlogDetailPage = () => {
  // state for fetched data
  const [blogPage, setBlogPage] = useState();

  // read id from url
  const { id } = useParams();

  // fetch data for this id
  useEffect(() => {
    fetch(`http://localhost:4004/blog/v1/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setBlogPage(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="detailpage">
      <BackButton />
      <Nav />
      <img
        src={`http://localhost:4004/${blogPage?.image}`}
        alt={blogPage?.title}
      />

      <div>
        <h2> {blogPage?.title}</h2>
        <h3>by {blogPage?.author}</h3>
      </div>

      <p> {blogPage?.text}</p>
    </section>
  );
};

export default BlogDetailPage;
