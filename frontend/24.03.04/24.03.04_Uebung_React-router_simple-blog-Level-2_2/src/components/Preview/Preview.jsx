import { Link } from "react-router-dom";
import "./Preview.css";

const Preview = (props) => {
  return (
    <div className="preview">
      <img src={props.article.img_url} alt={props.article.title} />
      <h3>{props.article.title}</h3>
      <Link to={`/blog/${props.article.id}`} className="button">
        Read more
      </Link>
    </div>
  );
};

export default Preview;
