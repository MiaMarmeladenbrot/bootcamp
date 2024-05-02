import "./Hero.css";

// ! Props Namen: title, descriptionMarzio, img, spiegelverkehrt

const Hero = ({ title, descriptionMarzio, img, spiegelverkehrt }) => {
  console.log(title);
  console.log(descriptionMarzio);

  //   console.dir(props);
  return (
    <section
      className={`hero ${spiegelverkehrt === "true" ? "revers-box" : ""}`}
    >
      <div>
        {/* Sobald wir was in das html schrieben wollen benötigen wir immer die {} aussenrum. */}
        <h2>{title}</h2>
        <p>{descriptionMarzio}</p>
        <a href="#">More</a>
      </div>
      <img src={img} alt="Bild von Berg" />
    </section>
  );
};

export default Hero;
