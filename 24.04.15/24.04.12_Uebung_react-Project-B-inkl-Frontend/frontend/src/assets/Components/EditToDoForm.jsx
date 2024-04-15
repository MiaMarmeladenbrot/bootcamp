import { useState } from "react";
import "./ToDoForm.css";

const EditToDoForm = ({ singleToDo, setToDos, setShowEditForm }) => {
  // state für den Content des jeweiligen Todo
  const [content, setContent] = useState(singleToDo.content);

  // state für person in charge des jeweiligen Todos
  const [todoist, setTodoist] = useState(singleToDo.todoist);

  // Func on click to edit and save new todo in backend json file
  const editToDo = (event) => {
    event.preventDefault();

    // Fehlermeldung, falls Felder nicht befüllt wurden
    if (content.length === 0 || todoist.length === 0) {
      window.alert("Please give a description and a person in charge");
      return;
    }

    // Variable für die zu sendenden Daten
    const updateToDoInfo = {
      content,
      todoist,
    };

    // Bearbeiten eines ToDos
    // Endpoint: // PATCH /api/v1/todos/:id
    fetch(`http://localhost:3003/api/v1/todos/${singleToDo.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateToDoInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        setToDos(data);
        setShowEditForm(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form>
      <input
        type="text"
        placeholder="What needs doing?"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <input
        type="text"
        placeholder="Who's in charge?"
        onChange={(e) => setTodoist(e.target.value)}
        value={todoist}
      />
      {/* //# statt TimeStamp Due Date hinzufügen, dann auch im Server ändern */}
      {/* <input type="date" placeholder="Due Date" /> */}
      <button onClick={editToDo}>Save</button>
    </form>
  );
};

export default EditToDoForm;
