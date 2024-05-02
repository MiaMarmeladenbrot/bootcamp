import "./Products.css";

const Products = (props) => {
  console.log(props);
  return (
    <div>
      <img src={props.img} alt={props.product} />
      <p>{props.product}</p>
      <p>{props.price}</p>
      <a className="button" href="#">
        Buy Now
      </a>
    </div>
  );
};

export default Products;
