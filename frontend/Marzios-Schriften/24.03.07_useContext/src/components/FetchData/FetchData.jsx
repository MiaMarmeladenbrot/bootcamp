import { useContext, useEffect } from "react";
import { FetchContext } from "../../context/Context";

const FetchData = () => {
  const { setCountries } = useContext(FetchContext);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error("Fehelr beim fetchen ", err));
  }, []);
};

export default FetchData;
