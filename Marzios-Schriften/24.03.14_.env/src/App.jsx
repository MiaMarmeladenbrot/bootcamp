import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=berlin&appid=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((superData) => setData(superData));
  }, []);
  console.log(data);

  return (
    <>
      {/* mit dem "?" fragen wir ab ob daten vorhanden sind */}
      <h1>Wetter in {data?.[0].name}</h1>

      <h2>lat {data?.[0].lat}</h2>
      <h2>lon {data?.[0].lon}</h2>
    </>
  );
}

export default App;
