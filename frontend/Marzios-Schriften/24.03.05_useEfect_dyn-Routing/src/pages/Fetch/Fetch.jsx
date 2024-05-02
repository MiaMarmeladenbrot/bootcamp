import { Link } from "react-router-dom";
import "./Fetch.css";
import { useEffect, useState } from "react";

const Fetch = () => {
  const [megaData, setMegaData] = useState();

  // * der fetch wird immer ausgeführt wenn die Komponente das erste mal gerendert wird.
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      // * Bei dem 2 then speichern wir die daten in einem State "setMegaData(data)"
      .then((data) => setMegaData(data))
      .catch((err) => console.error("Fehler :-(", err));
  }, []); // Hier wird er beim ersten mal rendern die daten gefetcht

  //   Logs um daten zu sehen
  console.log(megaData);

  return (
    <>
      <h5>Fetch</h5>
      <section className="produkt-kacheln">
        {megaData ? (
          megaData.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt="" />
              <p>{item.title}</p>
              <Link to={`/fetch/${item.id}`}> Zu dem Produkt</Link>
            </div>
          ))
        ) : (
          <p>Laden...</p>
        )}
      </section>
    </>
  );
};

export default Fetch;
