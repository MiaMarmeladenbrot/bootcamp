//* Benötigte Endpunkte:
// GET /api/v1/todos ✅
// GET /api/v1/todos/:id ✅
// POST /api/v1/todos ✅
// PATCH /api/v1/todos/:id ✅
// DELETE /api/v1/todos/:id ✅

//* Aufbau eines Todos:
// {
//     "id": 1712924278109,
//     "timestamp": 1712924278109,
//     "content": "Pflanze einen Baum",
//     "todoist": "Felix"
//   }

import express from "express";
import { readTodos, writeTodo } from "./filesystem.js";

const app = express();

// logging middleware
app.use((req, _, next) => {
  console.log("new Request:", req.method, req.url);
  next();
});

// body parser middleware
app.use(express.json());

// GET /api/v1/todos
app.get("/api/v1/todos", (_, res) => {
  readTodos()
    .then((todos) => res.status(200).json(todos))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not read todos" })
    );
});

// GET /api/v1/todos/:id
app.get("/api/v1/todos/:id", (req, res) => {
  const todoId = req.params.id;

  readTodos() // alle ToDos lesen
    .then(
      (todos) => todos.find((singleToDo) => singleToDo.id.toString() == todoId) // in allen ToDos die ID aus dem Request finden
    )
    .then((foundTodo) => res.status(200).json(foundTodo)) // Daten der gefundenen ID zurückgeben
    .catch((err) =>
      res.status(500).json({ err, message: "Could not read requested todo" })
    );
});

// POST /api/v1/todos
app.post("/api/v1/todos", (req, res) => {
  // Inhalte aus der request in einer Variable speichern:
  const newTodo = {
    id: Date.now(),
    timestamp: Date.now(),
    content: req.body.content,
    todoist: req.body.todoist,
  };

  readTodos()
    .then((todoContent) => [...todoContent, newTodo])
    .then((newTodoArray) => writeTodo(newTodoArray))
    .then((newTodoArray) => res.status(200).json(newTodoArray))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not add new todo" })
    );
});

// PATCH /api/v1/todos/:id
app.patch("/api/v1/todos/:id", (req, res) => {
  const updateTodoId = req.params.id;
  const updateInfo = req.body;

  readTodos() // alle Todos auslesen und dann drüber mappen, um richtige id zu finden
    .then((todos) =>
      todos.map((singleTodo) => {
        if (singleTodo.id.toString() === updateTodoId) {
          return {
            ...singleTodo,
            ...updateInfo,
          };
        } else {
          return singleTodo;
        }
      })
    )
    .then((todos) => writeTodo(todos))
    .then((todos) => res.status(200).json(todos))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not update todo" })
    );
});

// DELETE /api/v1/todos/:id
app.delete("/api/v1/todos/:id", (req, res) => {
  const deleteTodoId = req.params.id;

  readTodos()
    .then((todos) =>
      todos.filter((singleTodo) => singleTodo.id.toString() !== deleteTodoId)
    )
    .then((todos) => writeTodo(todos))
    .then((todos) => res.status(200).json(todos))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not delete todo" })
    );
});

// Port
const PORT = 3003;
app.listen(PORT, () => console.log("Server ready at", PORT));
