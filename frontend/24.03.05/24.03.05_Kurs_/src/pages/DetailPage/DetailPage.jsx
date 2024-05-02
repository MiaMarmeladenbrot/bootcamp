// ! To Do
// 1. alle Daten fetchen
// 2. Link der jeweiligen Detailseite auslesen
// 3. find-Methode, um das einzelne Produkt zu finden
// 4. im HTML rendern

import { useEffect, useState } from "react";
import "./DetailPage.css";
import { useParams } from "react-router";

const DetailPage = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // * 1. Fetchen der Produktdaten und Speichern der Daten im data-State:
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((fetchData) => setData(fetchData))
      .catch((err) => console.log(err));
  }, []);

  // * 2. Link auslesen --> hier nehmen wir dynamischen Link aus App.jsx und Fetch.jsx wieder auf:
  //   const id = useParams(); //--> gibt Key-Namen und Wert raus
  //   console.log(id); // --> zB id: 3

  const { id } = useParams(); //--> gibt nur den Wert raus; den brauchen wir im Folgenden
  //   console.log(id); //--> zB 3

  // * 3. Find Methode und gefilterte Daten in neuem State speichern:
  useEffect(() => {
    // wenn ich mehrere Sachen herausfinden will, nutze ich filter; gibt mir ein array zurück
    // find kann nur nach einem Element suchen; gibt mir ein Objekt zurück
    // wir brauchen nur ein Element, nämlich jeweils ein Produkt, deshalb nutzen wir hier "find"
    // funktioniert wie ein Loop, geht alle Elemente durch und sucht
    // die gefundenen Daten, die gefunden werden, speichern wir in einer eigenen Variable:
    const find = data.find((item) => Number(item.id) === Number(id));

    // console.log(find); //--> gibt ein Objekt mit den Inhalten der jeweiligen ID raus, zB von id 3

    setFilteredData(find); //--> gefundenes Objekt im state filteredData speichern
  }, [data]); //--> jedes Mal, wenn sich State der gefetchten Daten (Zeile 12 und 19) ändert, wird die Find-Methode angewandt

  console.log(filteredData);

  return (
    <section>
      <h2>Detail Page</h2>
      {filteredData ? (
        <div>
          <img src={filteredData.image} alt="" />
          <h2>{filteredData.title}</h2>
          <p>{filteredData.category}</p>
          <p>{filteredData.price} €</p>
          <p>{filteredData.description}</p>
        </div>
      ) : (
        //
        <p>Laden...</p>
      )}
    </section>
  );
};

export default DetailPage;
