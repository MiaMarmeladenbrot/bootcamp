import NewsItem from "../NewsItem/NewsItem";
import "./NewsList.css";

const NewsList = () => {
  const artikelArray = [
    {
      title:
        "Laufjacken im Frühling: Tipps, Tricks und vier Modelle für Männer",
      description:
        "Der April ist ein verflixt komplizierter Monat. Weder heiß noch kalt. Graupelschauer am Morgen, T-Shirt-Wetter am Nachmittag. Mütze auf, Mütze ab. Auch Läufern treiben die eigenwilligen Marotten des April die Schweißperlen auf die Stirn. Und zwar häufig schon vor dem Training. Kurz oder lang? Zwei Schichten? Oder doch drei? Und was ist mit der Laufjacke? Fragen über Fragen. ",
      link: "https://www.stern.de/sport/laufjacken-fuer-herren--mit-diesen-modellen-laeuft-es-sich-gut-33919278.html",
      img: "https://image.stern.de/33354932/t/iP/v2/w1440/r1.7778/-/laufjacken-maenner-aufmacher.jpg",
    },
    {
      title:
        "Ein Opernsänger kickt Baltimore zum Sieg und ein uralter Rekord kann wieder nicht gebrochen werden",
      description:
        "Baltimores Justin Tucker besitzt nicht nur eine zarte Stimme, sondern auch einen zielsicheren Fuß – das stellte der Kicker am Sonntag erneut unter Beweis. Unterdessen wartet die NFL weiter darauf, dass ein 51 Jahre alter Rekord eingestellt wird.",
      link: "https://www.stern.de/sport/nfl--wie-ein-opernsaenger-die-baltimore-ravens-zum-sieg-kickt-33917824.html",
      img: "https://image.stern.de/33917906/t/ex/v2/w1440/r1.7778/-/justin-tucker.jpg",
    },
    {
      title:
        "Nach Pro-Palästina-Post: FC Bayern kündigt ausführliches persönliches Gespräch mit Mazraoui an",
      description:
        "Verteidiger Noussair Mazraoui droht beim FC Bayern München Ärger. Nach seiner Rückkehr von der marokkanischen Fußball-Nationalmannschaft will die Klubführung in München mit ihm sprechen.",
      link: "https://www.stern.de/sport/fussball/noussair-mazraoui--klubfuehrung-des-fc-bayern-muenchen-sucht-gespraech-33917364.html",
      img: "https://image.stern.de/33917374/t/wF/v1/w1440/r1.7778/-/noussair-mazraoui.jpg",
    },
    {
      title: "Sicher joggen im Dunkeln: Welche Stirnlampe passt zu mir?",
      description:
        "Einst als ängstliche Spinner belächelt, sind Jogger mit Stirnlampe heute längst in der Läufer-Community angekommen. Manchen fehlt allerdings noch das richtige Händchen beim Kauf. Welche Stirnlampe passt zu Ihnen?",
      link: "https://www.stern.de/sport/stirnlampe-joggen--sicherheit---sichtbarkeit-im-dunkeln-30771708.htmlnoussair-mazraoui--klubfuehrung-des-fc-bayern-muenchen-sucht-gespraech-33917364.html",
      img: "https://image.stern.de/33074710/t/sK/v3/w1440/r1.7778/-/stirnlampe-joggen-winter-2023.jpg",
    },
  ];

  return (
    <section>
      <h2>Top News 2024</h2>
      <h2>Map mit komponente</h2>
      <div className="grid-news">
        {/* forEach würde hier nicht gehen. React benötigt immer map.  */}

        {artikelArray.map((singleArticle, index) => (
          <NewsItem
            propÜbetragungvonSingleArticle={singleArticle}
            // Key MUSS key heißen!
            key={index}
          />
        ))}

        <hr />

        <h2>Map ohne Componente</h2>
        {artikelArray.map((item, index) => (
          <div key={index}>
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsList;
