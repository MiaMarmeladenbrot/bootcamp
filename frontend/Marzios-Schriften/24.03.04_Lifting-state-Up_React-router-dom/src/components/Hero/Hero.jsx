import "./Hero.css";

const Hero = ({ title, description }) => {
  // -({ title, description })
  // So mache ich object diconstrucktion, ich hole mir mit den {} klammer nur die daten die ich benötige ( so muss ich nichtmehr "porps." schreiben.  Sondern kann direktr auf den wert {title} zugreifen)

  // -(props)
  // so reiche ich ein packet durch mit allen inhalten, sprich alles was ich auf der anderen seite(Home.jsx) weiterrecihe

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Hero;
