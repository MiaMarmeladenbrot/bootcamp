import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = () => {
  return (
    <section className="todo-list">
      <h2>ToDo List</h2>
      <ul>
        <TodoItem list="Buy Grocerys" />
        <TodoItem list="Send Email" />
        <TodoItem list="Finish Assignement" />
        <TodoItem list="Write Blog" />
        <TodoItem list="Bake Cake" />
      </ul>
    </section>
  );
};

export default TodoList;
