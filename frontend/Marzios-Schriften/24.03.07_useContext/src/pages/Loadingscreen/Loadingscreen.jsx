import { useContext, useEffect } from "react";
import { LoadingContext } from "../../context/Context";
import FetchData from "../../components/FetchData/FetchData";

const Loadingsscreen = () => {
  // So importiere ich den useContext in den jeweilige dateien. Ich kann selber bestimmt ob ich auch den setter oder getter importiere
  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  return (
    <section>
      <h1>ich Lade...</h1>
      <FetchData />
    </section>
  );
};

export default Loadingsscreen;
