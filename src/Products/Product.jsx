
import "./Product.css";

const Product = ({response}) => {
  return (
    <>
      <section className="card-container">
        {response}
      </section>
    </>
  );
};

export default Product;
