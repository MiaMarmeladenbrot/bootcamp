const NewsItem = (props) => {
  console.log("HI Reazy ", props);

  return (
    <div>
      <img src={props.propÜbetragungvonSingleArticle.img} alt="Bilder" />
      <h2>{props.propÜbetragungvonSingleArticle.title}</h2>
      <p>{props.propÜbetragungvonSingleArticle.description}</p>
      <a href={props.propÜbetragungvonSingleArticle.link} target="_blank">
        Mehr lesen
      </a>
    </div>
  );
};

export default NewsItem;
