// 1. Alle daten Fetchen
// 2. Linkn oben auslesen damit ich weis welches Produkt ich hier anzeigen lassen soll
// 3. find methode schrieben um das einzelen produkt zu finden
// 4. ins html schriebn

import { useEffect, useState } from "react";
import "./DetailPage.css";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const [data, setData] = useState([]);
  const [filterdData, setFilterData] = useState([]);

  // * 1 Hier Fetchen wir erstaml alles date und speichern sie in einem State ab
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((fetchData) => setData(fetchData))
      .catch((err) => console.error("Fehler auf der deteilseite", err));
  }, []);

  // * 2 Link auslesen
  const { id } = useParams();
  console.log(id);

  // find vs filter
  // find -  benutze ich wenn ich nur 1 element suche , gibt uns ein objekt
  // filter - benutze ich immer wenn ich mehrer element aus einne packet suche, gibt uns ein array

  // * 3 Find Methode schrieben und in einen neuen state speichern
  useEffect(() => {
    const find = data.find((item) => Number(item.id) === Number(id));
    setFilterData(find); // wir schreiben es in unsere state
  }, [data]); // Jedes mal wenn sich data updatet wird die find methode neu ausgeführt

  console.log(filterdData);

  return (
    <section>
      <h4>Detail Page</h4>
      {filterdData ? (
        <div>
          <h1>{filterdData.title}</h1>
          <img src={filterdData.image} alt="" />
          <p>{filterdData.description}</p>
          <h3>{filterdData.price} €</h3>
        </div>
      ) : (
        <p>Laden...</p>
      )}
    </section>
  );
};

export default DetailPage;
