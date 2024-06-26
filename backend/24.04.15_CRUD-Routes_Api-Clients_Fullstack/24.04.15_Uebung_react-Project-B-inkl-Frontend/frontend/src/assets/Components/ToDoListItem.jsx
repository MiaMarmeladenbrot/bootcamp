import { useState } from "react";
import EditToDoForm from "./EditToDoForm";
import "./ToDoListItem.css";
import { Link } from "react-router-dom";

const ToDoListItem = ({ singleToDo, setToDos }) => {
  // state zum Anzeigen der edit-Formulare unter den Todos
  const [showEditForm, setShowEditForm] = useState(false);

  // Funktion zum Löschen eines ToDos
  // Endpoint: DELETE /api/v1/todos/:id
  const deleteTodo = () => {
    fetch(`http://localhost:3003/api/v1/todos/${singleToDo.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setToDos(data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <section className="todo-list-item">
        {/* // # noch todo: ganz vorn Abhak-Möglichkeit für erledigte ToDos */}
        {/* <input type="checkbox" /> */}

        <Link to={`/todos/${singleToDo?.id}`}>
          <div>
            <p>{new Date(singleToDo?.dueDate).toLocaleDateString()}</p>
            <p>{singleToDo?.content}</p>
          </div>
          <p>{singleToDo?.todoist}</p>
        </Link>
        <button onClick={() => setShowEditForm(!showEditForm)}>✎</button>
        <button onClick={deleteTodo}>❌</button>
      </section>

      <div style={{ display: showEditForm ? "block" : "none" }}>
        <EditToDoForm
          singleToDo={singleToDo}
          setToDos={setToDos}
          setShowEditForm={setShowEditForm}
        />
      </div>
    </>
  );
};

export default ToDoListItem;
