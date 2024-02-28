import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Newslist from "../components/Newslist/Newslist";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <Hero
        title="Vogelperspektive aufs Wasser"
        descriptionMarzio="Hallo, ich bin ein Bild vom Meer"
        img="https://media.istockphoto.com/id/1300107681/de/foto/fl%C3%A4che-des-atlantischen-ozeans.jpg?s=612x612&w=0&k=20&c=WoCfDE4qAS-pNBHNT9FsOeiEs_s-Wb0aIbphSe9OwyQ="
        spiegelverkehrt=""
      />
      <Hero
        title="Zweite Hero-Section"
        descriptionMarzio="Hier kommt ein anderes Bild vom Meer"
        img="https://cdn.pixabay.com/photo/2018/06/13/18/20/waves-3473335_1280.jpg"
        spiegelverkehrt="true"
      />
      <Hero
        title="Dritte Hero-Section"
        descriptionMarzio="Hier kommt noch ein Bild vom Meer"
        img="https://media.istockphoto.com/id/467367026/de/foto/perfekte-himmel-und-meer.jpg?s=612x612&w=0&k=20&c=nSP8fF-5eGdbGTty82j2X8O0dPlEJkTpqHFOSfHYi68="
        spiegelverkehrt=""
      />
      <Newslist />
      <Footer />
    </>
  );
};

export default Home;
