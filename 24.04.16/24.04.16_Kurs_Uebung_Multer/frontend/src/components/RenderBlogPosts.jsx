import { useEffect, useState } from "react";
import "./RenderBlogPosts.css";
import { Link } from "react-router-dom";

const RenderBlogPosts = () => {
  // state for fetched data
  const [blogPosts, setBlogPosts] = useState();

  // get all blog posts for rendering
  useEffect(() => {
    fetch("http://localhost:4004/blog/v1/posts")
      .then((res) => res.json())
      .then((data) => setBlogPosts(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(blogPosts);
  // {
  //     "id": 1,
  //     "title": "How to blabla",
  //     "date": 1712908901255,
  //     "author": "Me",
  //     "text": "Lorem ipsum",
  //     "image": "409a81980aecacde908d91f1b9fa74f0"
  //  }

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
