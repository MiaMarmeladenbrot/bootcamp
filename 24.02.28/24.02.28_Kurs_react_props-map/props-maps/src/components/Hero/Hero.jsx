import "./Hero.css";

// ! Props: title, descriptionMarzio, img
// const Hero = (props) => {
//   console.dir(props);

//   return (
//     <section
//       className={`hero ${
//         props.spiegelverkehrt === "true" ? "reverse-box" : ""
//       }`}
//     >
//       <div>
//         <h2>{props.title}</h2>
//         <p>{props.descriptionMarzio}</p>

//         <a href="#">More</a>
//       </div>
//       <img src={props.img} alt="Bild vom Meer" />
//     </section>
//   );
// };

// export default Hero;

// ! Alternative Schreibweise von props:
const Hero = ({ title, descriptionMarzio, img, spiegelverkehrt }) => {
  console.log(title);
  console.log(descriptionMarzio);
  console.log(img);
  console.log(spiegelverkehrt);

  return (
    <section
      className={`hero ${spiegelverkehrt === "true" ? "reverse-box" : ""}`}
    >
      <div>
        <h2>{title}</h2>
        <p>{descriptionMarzio}</p>
        <a href="#">More</a>
      </div>
      <img src={img} alt="Bild vom Meer" />
    </section>
  );
};

export default Hero;
