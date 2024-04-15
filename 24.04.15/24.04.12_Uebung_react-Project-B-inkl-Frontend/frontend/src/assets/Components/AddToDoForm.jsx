import { useState } from "react";
import "./ToDoForm.css";

const AddToDoForm = ({ todos, setToDos }) => {
  // state for content from input 1
  const [content, setContent] = useState("");

  // state for person in charge from input 2
  const [todoist, setTodoist] = useState("");

  // Func on click to save new todo in backend json file
  const addToDo = (event) => {
    event.preventDefault();

    // Fehlermeldung, falls Felder nicht befüllt wurden
    if (content.length === 0 || todoist.length === 0) {
      window.alert("Please give a description and a person in charge");
      return;
    }

    // Variable für die zu sendenden Daten
    const newToDo = {
      content,
      todoist,
    };

    // Endpoint: POST /api/v1/todos
    fetch("http://localhost:3003/api/v1/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newToDo),
    })
      .then((res) => res.json())
      .then((data) => {
        setToDos(data);
        setContent(""); // Felder wieder leeren
        setTodoist("");
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
      <button onClick={addToDo}>Save</button>
    </form>
  );
};

export default AddToDoForm;
