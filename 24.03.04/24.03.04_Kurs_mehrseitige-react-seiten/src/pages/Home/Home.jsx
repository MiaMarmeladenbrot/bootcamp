import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  // ! 1. Erstellen von einem Setter
  const [superDark, setSuperDark] = useState(false);
  console.log(superDark);

  // * setter ist eine Funktion:
  //   console.log(setSuperDark);

  return (
    // ! 5. Hier benutze ich den state zum Togglen:
    // * Hier wird je nach Zustand des state eine Klasse hinzugefügt, die dann den globalen Dark-Mode stylt:
    <section className={superDark ? "dark-global" : ""}>
      <Header
        hallo="Hallo, ich bin Marzio"
        // ! 2. Weiterreichen des Setter (ab hier geht's zu Header.jsx):
        // * diese Funktion kann wie props ans Kind-Element weitergereicht und dort benutzt werden:
        // * in diesem Fall erstellen wir damit in <Header> eine Funktion und legen sie auf einen Button:
        setSuperDark={setSuperDark}
      />
      <Hero
        title="Hallo von der Mia"
        description="Hallo, ich bin ein langer Text von der Description"
      />
    </section>
  );
};

export default Home;
