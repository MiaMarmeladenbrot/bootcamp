import { useContext, useEffect } from "react";
import Header from "../../components/Header/Header";
import "./Countries.css";
import { FetchContext } from "../../context/Context";

const Countries = () => {
  const { countries } = useContext(FetchContext);

  return (
    <>
      <Header />
      <section>
        <h1>Countries</h1>

        {countries ? (
          <div className="grid-spass">
            {countries.map((item, index) => (
              <div key={index}>
                <img src={item.flags.svg} alt="" />
                <h3>{item.name.common}</h3>
                <hr />
                <p> Population: {item.population}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>laden...</p>
        )}
      </section>
    </>
  );
};

export default Countries;
