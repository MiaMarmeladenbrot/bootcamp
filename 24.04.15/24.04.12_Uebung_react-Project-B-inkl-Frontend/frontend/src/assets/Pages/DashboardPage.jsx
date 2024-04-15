import { useEffect, useState } from "react";
import AddToDoForm from "../Components/AddToDoForm";
import ToDoList from "../Components/ToDoList";

const DashboardPage = () => {
  // state, um gefetchte ToDos zu speichern
  const [todos, setToDos] = useState([]);

  // fetchen aller ToDos
  useEffect(() => {
    fetch(`http://localhost:3003/api/v1/todos`)
      .then((res) => res.json())
      .then((data) => {
        setToDos(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1>Your ToDos</h1>
      <AddToDoForm todos={todos} setToDos={setToDos} />
      <ToDoList todos={todos} setToDos={setToDos} />
    </>
  );
};

export default DashboardPage;
