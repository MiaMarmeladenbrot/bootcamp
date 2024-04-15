import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ToDoDetailPage = () => {
  // Id auslesen
  const { todoId } = useParams();
  console.log(todoId);

  // state, um gefetchte Daten zu speichern
  const [todo, setTodo] = useState();

  // Fetch GET /api/v1/todos/:id
  useEffect(() => {
    fetch(`http://localhost:3003/api/v1/todos/${todoId}`)
      .then((res) => res.json())
      .then((data) => {
        setTodo(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <h2>{todo?.content}</h2>
      <p>in charge: {todo?.todoist}</p>
      <p>Todo created: {new Date(todo?.timestamp).toLocaleDateString()}</p>
    </section>
  );
};

export default ToDoDetailPage;
