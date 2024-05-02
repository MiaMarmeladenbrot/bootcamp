import { useContext, useEffect } from "react";
import { FetchContext } from "../../context/Context";

const FetchData = () => {
  const { countries, setCountries } = useContext(FetchContext);

  console.log(countries);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.log("fehler beim Fetchen", err));
  }, []);
};

export default FetchData;
