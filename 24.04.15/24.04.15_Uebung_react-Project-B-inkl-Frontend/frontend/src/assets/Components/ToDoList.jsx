import ToDoListItem from "./ToDoListItem";

const ToDoList = ({ todos, setToDos }) => {
  return (
    <section>
      {todos?.map((singleToDo) => (
        <ToDoListItem
          key={singleToDo.id}
          singleToDo={singleToDo}
          setToDos={setToDos}
        />
      ))}
    </section>
  );
};

export default ToDoList;
