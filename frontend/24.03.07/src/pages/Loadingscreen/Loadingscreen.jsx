import { useContext, useEffect } from "react";
import { LoadingContext } from "../../context/Context";
import FetchData from "../../components/FetchData/FetchData";

const Loadingscreen = () => {
  // useContext importieren für diese Datei; könnte auch nur setter oder nur getter importieren:
  const { loading, setLoading } = useContext(LoadingContext);
  // console.log("loadingscreen", loading);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  return (
    <section>
      <h1>Loading ...</h1>
      {/* Hier kann ich jetzt auch Daten fetchen, sollte ich welche brauchen; der Fetch nutzt dann schon mal die Zeit, die ich eh als Ladezeit festgelegt habe und dann sollten die Daten da sein, wenn die Seite wirklich erscheint */}
      {/* sollte ich keinen Loadingscreen haben, kann ich den Fetch zB auch im Header machen - er sollte immer in einer Komponente statffinden, die sofort beim ersten Laden gerendert wird */}
      <FetchData />
    </section>
  );
};

export default Loadingscreen;
