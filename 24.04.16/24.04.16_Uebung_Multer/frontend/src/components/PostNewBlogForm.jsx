import { useContext, useState } from "react";
import "./PostNewBlogForm.css";
import { BlogPostsContext } from "../context/Context";

const PostNewBlogForm = () => {
  // global Context for blog posts
  const { setBlogPosts } = useContext(BlogPostsContext);

  // state for uploading image
  const [attachment, setAttachment] = useState();

  // state for title
  const [title, setTitle] = useState("");

  // state for author
  const [author, setAuthor] = useState("");

  // state for text
  const [text, setText] = useState("");

  // Onclick Func to get input-Data and send it to backend and give response back to frontend
  const addNewPost = (e) => {
    e.preventDefault();

    // falls kein Anhang da ist, soll einfach returned werden
    if (!attachment) return;

    // ! Multer / formData
    const formData = new FormData();
    formData.append("attachment", attachment, attachment.name);

    // Formular-Daten ans Backend übergeben
    fetch("http://localhost:4004/blog/v1/files/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const newBlogPost = {
          title,
          author,
          text,
          image: data.fileName,
        };
        return newBlogPost;
      })
      .then((newBlogPost) =>
        fetch("http://localhost:4004/blog/v1/posts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newBlogPost),
        })
      )
      .then((res) => res.json())
      .then((data) => setBlogPosts(data))
      .catch((err) => console.log(err));

    setTitle("");
    setAuthor("");
    setText("");
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <input
        type="text"
        placeholder="Author"
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
      />

      <input type="file" onChange={(e) => setAttachment(e.target.files[0])} />

      <textarea
        name="blogtext"
        id=""
        cols="30"
        rows="10"
        onChange={(e) => setText(e.target.value)}
        value={text}
      ></textarea>

      <button onClick={addNewPost}>Publish</button>
    </form>
  );
};

export default PostNewBlogForm;
