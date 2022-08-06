import products from "../final/data";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <section className='section'>
       {
        products.map((e)=>(
          <section key={e.id}>
            <img src={e.image} alt={e.name} />
            <h5>{e.name}</h5>
            <Link to={`/products/${e.id}`} className='btn' >View more</Link>
          </section>
        ))
       }
      </section>
    </>
  );
};

export default Products;
