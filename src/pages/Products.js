import { Link } from "react-router-dom";
const Products = () => {
  return (
    <>
      <section className='section'>
        <h2>products</h2>
      </section>
      <Link to='/home' className='btn'>Home</Link>
    </>
  );
};

export default Products;
