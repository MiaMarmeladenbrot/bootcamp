// PLAN: BLOG
// 1. Entitäten  ✅
//      - Post
//          - Titel
//          - Autor
//          - Image
//          - Text
//          - Datum
// {
//     "id": 1,
//     "title": "How to blabla",
//     "date": 1712908901255,
//     "author": "Me",
//     "text": "Lorem ipsum",
//     "image": "409a81980aecacde908d91f1b9fa74f0"
//  }

// 2. Endpoints
//      - GET all posts ✅
//      - GET one post ✅
//      - POST new post ✅
//      - PATCH one post ✅
//      - DELETE one post ✅

// 3. Pages/Components ✅
//      - HomePage
//          - Nav -> AdminPage
//          - Hero
//          - RenderBlogPosts
//      - BlogDetailPage
//      - AdminPage
//          - PostNewBlogForm

import cors from "cors";
import multer from "multer";
import express from "express";
import { readBlogPosts, writeBlogPosts } from "./filesystem.js";

// create server
const app = express();

// cors middleware
app.use(cors());

// logging middleware
app.use((req, _, next) => {
  console.log("new Request: ", req.method, req.url);
  next();
});

// static file middleware
app.use(express.static("uploads"));

// body parser middleware
app.use(express.json());

// ! Endpoints
// GET all posts
app.get("/blog/v1/posts", (_, res) => {
  // ruft read-Funktion auf und gibt die dabei aus blogData.json eingelesenen Daten als Antwort an Client zurück
  readBlogPosts()
    .then((blogPosts) => res.status(200).json(blogPosts))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not read all blog posts" })
    );
});

// GET one post
app.get("/blog/v1/posts/:id", (req, res) => {
  // ID aus der client-request lesen - als Number, da ID in diesem Fall immer eine Number ist
  const blogPostId = Number(req.params.id);

  // ruft read-Funktion auf und vergleicht die eingelesenen Daten mit der Request-ID, um so die passenden Daten zu finden
  // gibt die unter der Id gefundenen Daten als Antwort an den Client zurück
  readBlogPosts()
    .then((blogPosts) =>
      blogPosts.find((post) => Number(post.id) === blogPostId)
    )
    .then((foundPost) => res.status(200).json(foundPost) || {})
    .catch((err) =>
      res.status(500).json({ err, message: "Could not find requested post" })
    );
});

// POST new file
// with multer for uploading data
const upload = multer({ dest: "./uploads" });
app.post("/blog/v1/files/upload", upload.single("attachment"), (req, res) => {
  res.json({ fileName: req.file.filename });
});

// POST new post
app.post("/blog/v1/posts", (req, res) => {
  // Variable, um die Daten aus dem request-body zwischenzulagern
  const newPost = {
    id: Date.now(),
    date: Date.now(),
    title: req.body.title,
    author: req.body.author,
    text: req.body.text,
    image: req.body.image,
  };

  // ruft read-Funktion auf, ergänzt dort die Daten aus der request am Ende des bisherigen Objekts und schreibt dann alles in die blogData.json
  readBlogPosts()
    .then((blogPosts) => [...blogPosts, newPost])
    .then((newBlogPosts) => writeBlogPosts(newBlogPosts))
    .then((newBlogPosts) => res.status(200).json(newBlogPosts))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not post new post" })
    );
});

// PATCH one post
app.patch("/blog/v1/posts/:id", (req, res) => {
  // ID aus der client-request lesen; als Nummer, da ich immer nur Nummern als id verwende
  const UpdateBlogPostId = Number(req.params.id);

  // zu ändernden Inhalt auf client-request lesen:
  const updatePostInfo = req.body;

  // ruft read-Funktion auf, sucht in den eingelesenen Daten nach der req-Id und fügt diese mit den req-body-Informationen zusammen
  readBlogPosts()
    .then((blogPosts) =>
      blogPosts.map((singlePost) => {
        if (Number(singlePost.id) === UpdateBlogPostId) {
          return {
            ...singlePost,
            ...updatePostInfo,
          };
        } else {
          return singlePost;
        }
      })
    )
    // dann ruft write-Funktion auf, um das so neu zusammengestellte Object in die blogData.json zu schreiben und das Ganze an den Client zurückzusenden
    .then((blogPosts) => writeBlogPosts(blogPosts))
    .then((blogPosts) => res.status(200).json(blogPosts))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not update requested post" })
    );
});

// DELETE one post
app.delete("/blog/v1/posts/:id", (req, res) => {
  const postToDelete = Number(req.params.id);

  // ruft read-Funktion auf, um darin alle Blogposts AUSSER der mit der gesuchten ID zu filtern, zu speichern und mit write-Funktion dann blogData.json zu überschreiben
  readBlogPosts()
    .then((blogPosts) =>
      blogPosts.filter((singlePost) => Number(singlePost.id) !== postToDelete)
    )
    .then((blogPosts) => writeBlogPosts(blogPosts))
    .then((blogPosts) => res.status(200).json(blogPosts))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not delete requested post" })
    );
});

// PORT
const PORT = 4004;
app.listen(PORT, () => console.log("Server ready at port ", PORT));
