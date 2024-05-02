import Counter from "../../components/Counter/Counter";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <Hero
        title="Hallöchen ich bin ein baby Hund"
        text="ich bin der bsp Text von meiner Home jsx übergeben via props"
        img="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?cs=srgb&dl=pexels-chevanon-photography-1108099.jpg&fm=jpg"
      />
      <hr />
      <Counter />
      <hr />
      <Form />
      <hr />
      <Footer />
    </>
  );
};

export default Home;
