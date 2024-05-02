import { useContext } from "react";
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
        {/* theoretisch wäre die Ausgabe hier ohne ternary möglich, da wir die zweisekündige Loading-Page haben, aber vorsichtshalber, falls es aus irgendeinem Grund doch länger dauern sollte, ternary besser einbauen: */}
        {countries ? (
          <div className="grid-countries">
            {countries.map((item, index) => (
              <div key={index}>
                <img src={item.flags.svg} alt="" />
                <h3>{item.name.common}</h3>
                <hr />
                <p>{item.population} Einwohner:innen</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading data</p>
        )}
      </section>
    </>
  );
};

export default Countries;
