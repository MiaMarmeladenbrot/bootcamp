import { useContext } from "react";
import Header from "../../components/Header/Header";
import { FetchContext } from "../../context/Context";
import "./About.css";

const About = () => {
  const { countries } = useContext(FetchContext);

  return (
    <>
      <Header />
      <section>
        <h1>About</h1>
      </section>
    </>
  );
};

export default About;

