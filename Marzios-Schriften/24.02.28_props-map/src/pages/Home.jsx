import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import NewsList from "../components/NewsList/NewsList";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />

      <Hero
        title="Die Anden von Chile"
        descriptionMarzio="Hallo ich bin ein Berg in Chile"
        img="https://www.designreisen.de/magazin/wp-content/uploads/2017/06/patagonien02.png"
        spiegelverkehrt="true"
      />

      <NewsList />

      <Footer />
    </>
  );
};

export default Home;
