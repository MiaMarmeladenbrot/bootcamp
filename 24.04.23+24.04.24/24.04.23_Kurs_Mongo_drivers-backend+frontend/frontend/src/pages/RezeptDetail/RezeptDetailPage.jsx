import { useEffect, useState } from "react";
import { backendUrl } from "../../api/api";
import { useParams } from "react-router-dom";
import Star from "../../components/Star";
import AddBewertungForm from "../../components/AddBewertungForm";

const RezeptDetailPage = () => {
  const [rezept, setRezept] = useState(null);
  const [portionenCount, setPortionenCount] = useState(0);

  const { rezeptId } = useParams();

  console.log(rezept);

  useEffect(() => {
    fetch(`${backendUrl}/api/v1/recipes/${rezeptId}`)
      .then((res) => res.json())
      .then((data) => {
        setRezept(data);
        setPortionenCount(data.portionen);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function deleteRating(ratingId) {
    fetch(`${backendUrl}/api/v1/ratings/${ratingId}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((deletedRating) => {
        setRezept({
          ...rezept,
          ratings: rezept.ratings.filter(
            (rating) => rating._id !== deletedRating._id
          ),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (!rezept) return <p>Loading...</p>;
  else
    return (
      <>
        <main>
          <h1>{rezept.name}</h1>

          <img src={rezept.imageURL} alt="Rezept Cover" width={800} />
          <h2>Steps:</h2>
          {rezept.steps.map((step, index) => (
            <p key={index}>{step}</p>
          ))}

          <h2>Ingredients:</h2>
          {rezept.ingredients.map((ingredient, index) => (
            <p key={index}>
              {ingredient.quantity}
              {ingredient.name}
            </p>
          ))}

          <AddBewertungForm
            rezeptId={rezept._id}
            onRatingAdded={(addedRating) =>
              setRezept({
                ...rezept,
                ratings: [...rezept.ratings, addedRating],
              })
            }
          />

          <ul style={{}}>
            {rezept.ratings.map((rating) => (
              <li
                style={{
                  backgroundColor: "lightskyblue",
                  padding: 8,
                  margin: 4,
                  borderRadius: 6,
                  listStyleType: "none",
                }}
              >
                <span>
                  {Array.from(Array(rating.stars)).map(() => (
                    <Star />
                  ))}
                </span>
                <p>{rating.text}</p>
                <button onClick={() => deleteRating(rating._id)}>❌</button>
              </li>
            ))}
          </ul>
        </main>
      </>
    );
};

export default RezeptDetailPage;
