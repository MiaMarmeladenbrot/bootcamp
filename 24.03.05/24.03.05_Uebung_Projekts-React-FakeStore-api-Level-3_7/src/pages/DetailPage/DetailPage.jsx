// 4. DetailPage.jsx:
// //  1. alle Daten fetchen
// // 2. Link der jeweiligen Detailseite auslesen
// // 3. find-Methode, um das einzelne Produkt zu finden
// // 4. im HTML rendern

import { useEffect, useState } from "react";
import "./DetailPage.css";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  // * state für gefetchte Daten, initial leeres array:
  const [fetchData, setFetchData] = useState([]);

  // * state für gefilterte Daten, initial leeres array:
  const [findData, setFindData] = useState([]);

  // * Zweiter Fetch der Produktdaten und speichern im state fetchData, mit leerem dependency array (der Fetch muss nur einmal stattfinden):
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setFetchData(data))
      .catch((err) => console.log(err));
  }, []);
  //   console.log(fetchData);

  // * dynamischen Link auslesen (siehe App.jsx und Products.jsx):
  const { id } = useParams();
  //   console.log(id);

  // * mit find() die ID abgleichen und gefilterte Daten im state findData speichern:
  useEffect(() => {
    const findItem = fetchData.find((item) => Number(item.id) === Number(id));
    setFindData(findItem);
  }, [fetchData]);

  // console.log(findData);

  return (
    <section className="detailpage">
      {findData ? (
        <div>
          <img src={findData.image} alt="" />
          <article>
            <h2>{findData.title}</h2>
            <p>{findData.category}</p>
            <h4>{findData.price} €</h4>
            <p>{findData.description}</p>
          </article>
        </div>
      ) : (
        <p>Infos werden geladen ...</p>
      )}
    </section>
  );
};

export default DetailPage;
