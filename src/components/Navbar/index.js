import { Link } from "react-router-dom";
import './style.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>DOGPEDIA</h1>
      <div className="links">
        <Link to="/">Home</Link>
      </div>
    </nav>
  )
}

export default Navbar;
