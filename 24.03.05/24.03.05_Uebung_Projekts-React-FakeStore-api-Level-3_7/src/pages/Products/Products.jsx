// ! To Do
// 1. erster Fetch in Elternelement, um Übersichtsseite zu rendern ✅
// 2. dynamischer Link mithilfe der ID aus gefetchten Daten ✅
// 3. App.jsx: Route mit dynamischem Link /:id ✅
// 4. DetailPage.jsx:
// //  1. alle Daten fetchen
// // 2. Link der jeweiligen Detailseite auslesen
// // 3. find-Methode, um das einzelne Produkt zu finden
// // 4. im HTML rendern

import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import "./Products.css";
import { Link } from "react-router-dom";

const Products = () => {
  // state definiern, in den gefetchte Daten gespeichert werden sollen:
  const [allData, setAllData] = useState();

  // useEffect starten, in dem der Fetch stattfindet und in dem die gefetchten Daten im state allData gespeichert werden:
  useEffect(() => {
    // console.log(allData);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setAllData(data))
      .catch((err) => console.log(err));
  }, []);

  // console.log(allData);

  return (
    <section className="products-page">
      <section></section>
      <h2>All Products</h2>
      <article className="products-container">
        {/* über state-array mappen, um die Produktübersicht im HTML zu rendern: */}
        {allData ? (
          allData.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={item.title} />
              <h5>{item.title}</h5>
              <p>{item.price} €</p>

              {/* Button mit dynamischem Link erstellen */}
              <Link to={`/products/${item.id}`} className="button">
                More
              </Link>
            </div>
          ))
        ) : (
          <p>Produkte werden geladen</p>
        )}
      </article>
    </section>
  );
};

export default Products;
