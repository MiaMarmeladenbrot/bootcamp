import { useState } from "react";

import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  //* 1. Erstellen von einen State in der Eltern Komponente
  const [superDark, setSuperDark] = useState(false);

  //  Logs
  console.log(superDark);

  return (
    // * 5. Hier benutze ich den state um zu Toggeln
    <section className={superDark && "darkGlobal"}>
      {/* //*  2. Weiterreichen des "Setter" => setSuperDark={setSuperDark} an daqs Kindelement "Header.jsx" via Props (punkt 3 - siehe Header.jsx) */}
      <Header setSuperDark={setSuperDark} />
      <Hero
        title="Hallo von der Mia"
        description="Hallo ich bin ein langer text von der description"
      />
    </section>
  );
};

export default Home;
