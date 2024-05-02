import { Link } from "react-router-dom";
import { backendUrl } from "../api/api";

const RezeptCard = ({ rezept }) => {
  return (
    <div className="rezept-card">
      <img src={rezept.imageURL} alt="Rezept Cover" />
      <p>{rezept.name}</p>
      <Link to={`/rezept/${rezept._id}`}>Zum Rezept</Link>{" "}
    </div>
  );
};

export default RezeptCard;
