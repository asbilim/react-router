import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className='section'>
      <h2>Home Page</h2>
      <Link to='/about' className="btn px-2">About</Link>
      <Link to='/login' className="btn">Login</Link>
      <Link to='/products' className="btn">Products</Link>
    </section>
  );
};
export default Home;
