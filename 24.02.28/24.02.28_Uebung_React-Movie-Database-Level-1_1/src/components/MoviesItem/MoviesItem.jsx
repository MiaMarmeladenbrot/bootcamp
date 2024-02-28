import "./MoviesItem.css";

const MoviesItem = (props) => {
  console.log(props.item);
  return (
    <div>
      <h2>{props.item.title}</h2>
      <p>{props.item.year}</p>
      <h3>{props.item.director}</h3>
      <p>{props.item.duration}</p>
      <p>{props.item.genre.join(", ")}</p>
      <p>{props.item.rate}</p>
    </div>
  );
};

export default MoviesItem;
