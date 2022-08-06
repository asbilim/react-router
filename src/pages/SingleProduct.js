import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const productId = useParams().productId;
  const product = products.find((item)=>item.id === productId)
  const {image,name} = product?product:null
  return (
    (
      product?
        <section className='section product'>
          <img src={image} alt={name} />
          <h5>{name}</h5>
          <Link  to='/products' className='btn'>Products</Link>
        </section>
      :
        <section>
          <h3>No products found</h3>
          <Link to='/products'>Products</Link>
        </section>
    )
  );
};


export default SingleProduct;
