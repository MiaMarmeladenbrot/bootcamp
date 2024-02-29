import "./Hero.css";

const Hero = (props) => {
  return (
    <section className="hero">
      <img src={props.img} alt="Dogoo" />

      <div>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </section>
  );
};

export default Hero;
