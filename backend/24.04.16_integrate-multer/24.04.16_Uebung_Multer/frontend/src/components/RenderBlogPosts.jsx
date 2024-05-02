import { useContext, useEffect, useState } from "react";
import "./RenderBlogPosts.css";
import { Link } from "react-router-dom";
import { BlogPostsContext } from "../context/Context";

const RenderBlogPosts = () => {
  // global context for all blogposts
  const { blogPosts, setBlogPosts } = useContext(BlogPostsContext);

  // get all blog posts for rendering
  useEffect(() => {
    fetch("http://localhost:4004/blog/v1/posts")
      .then((res) => res.json())
      .then((data) => setBlogPosts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="render-blogposts">
      <h2>Read to your heart's content!</h2>

      <article className="blogposts-container">
        {blogPosts?.map((singlePost, index) => (
          <Link key={index} to={`/posts/${singlePost.id}`}>
            <img
              src={`http://localhost:4004/${singlePost.image}`}
              alt={singlePost.title}
            />
            <div>
              <h3>{singlePost.title}</h3>
              <p>by {singlePost.author}</p>
            </div>
          </Link>
        ))}
      </article>
    </section>
  );
};

export default RenderBlogPosts;
