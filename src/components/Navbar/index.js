import { Link } from "react-router-dom";
import './style.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>DOG-PEDIA</h1>
      <div className="links">
        <Link to="/">Home</Link>
        {/* <Link to="/contact">Contact</Link> */}
      </div>
    </nav>
  )
}

export default Navbar;
