import "./Newsitem.css";

const Newsitem = (props) => {
  console.log(props.datenpaket);
  return (
    <div>
      <img src={props.datenpaket.img} alt={props.datenpaket.title} />
      <h2>{props.datenpaket.title}</h2>
      <p>{props.datenpaket.description}</p>
      <a href={props.datenpaket.link} target="_blank">
        Mehr lesen
      </a>
    </div>
  );
};

export default Newsitem;
