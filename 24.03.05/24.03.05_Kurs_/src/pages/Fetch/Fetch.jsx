import { useEffect, useState } from "react";
import "./Fetch.css";
import { Link } from "react-router-dom";

const Fetch = () => {
  const [megaData, setMegaData] = useState();

  // * der Fetch wird immer ausgeführt, wenn der Fetch das erste Mal gerendert wird:
  // mit console.log werden die gefetchten Daten nur in der Konsole ausgegeben
  // wir können aber nicht mehr direkt im Fetch ins HTML schreiben
  // deshalb jetzt mit setMegaData(data) die gefetchten Daten in einem state speichern, so sind sie auch außerhalb des fetch verfügbar und ich kann mit ihnen weiterarbeiten
  // das dependency array bleibt leer, weil der Fetch nur beim ersten Rendern der Seite ausgeführt werden soll
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setMegaData(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(megaData);

  return (
    <>
      <h5>Fetch</h5>
      <section className="products">
        {/* //! gefetchte Daten im HTML ausgeben: */}
        {/* //* ternary-Operator für den Fall, dass die Daten zu  langsam geladen werden: wenn in megaData Daten vorhanden sind, sollen sie gemappt werden; wenn nicht, soll ein Hinweis an den User kommen, dass noch geladen wird: */}
        {megaData ? (
          // * hier mappen wir jetzt über das oben erstellte array im state megaData und schreiben uns die gefetchten Daten ins HTML:
          megaData.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>

              {/* //! Detailseiten übers array rendern: */}
              {/* //* dynamischer Link mittels der ID der Produkte: */}
              <Link to={`/fetch/${item.id}`}>Zu dem Produkt</Link>
              {/* --> weiter geht's in der App.jsx und dann in der DetailPage.jsx */}
            </div>
          ))
        ) : (
          <p>Produkte werden geladen</p>
        )}
      </section>
    </>
  );
};

export default Fetch;
