import "./TodoItem.css";

const TodoItem = (props) => {
  console.log(props);
  return (
    <>
      <li>{props.list}</li>
    </>
  );
};

export default TodoItem;
