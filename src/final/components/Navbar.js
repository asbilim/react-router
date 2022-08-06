import { NavLink } from "react-router-dom";

export default function Navbar(){

  return (
    <nav className="navbar">
      <NavLink  to='/'  
        className={({isActive}) =>(isActive ? 'active link' : 'link')}
      >Home</NavLink>
      <NavLink  to='about'  
        className={({isActive}) =>(isActive ? 'active link' : 'link')}
      >About</NavLink>
      <NavLink  to='products'  
        className={({isActive}) =>(isActive ? 'active link' : 'link')}
      >Products</NavLink>
      <NavLink  to='login'  
        className={({isActive}) =>(isActive ? 'active link' : 'link')}
      >Login</NavLink>
      {/* <Link to='/' >Home</Link>
      <Link to='about'  >About</Link>
      <Link to='login' >Login</Link>
      <Link to='products' >Products</Link> */}
    </nav>
  )

}