import { useEffect, useState } from "react";
import { backendUrl } from "../../api/api";
import RezeptCard from "../../components/RezeptCard";
import { Link } from "react-router-dom";

const MainPage = () => {
  const [rezepte, setRezepte] = useState([]);
  useEffect(() => {
    fetch(`${backendUrl}/api/v1/recipes`)
      .then((res) => res.json())
      .then((data) => setRezepte(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(rezepte);
  return (
    <>
      <Link to="/rezept/add">
        <button>Add Rezept</button>
      </Link>

      <h1>Rezepte</h1>
      {rezepte.map((rezept) => (
        <RezeptCard rezept={rezept} key={rezept._id} />
      ))}
    </>
  );
};

export default MainPage;
