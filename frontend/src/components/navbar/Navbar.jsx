import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    return(
        <nav className="navbar">
            <Link to="/" className='nav-logo'>web.logo</Link>
            <input type="search" id="search" placeholder="search" className="nav-search"/>
            <ul className='nav-links'>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/">Green-Store</Link></li>
                <li><Link to="/signin">SignIn / SignUp</Link></li>
                <li><Link to="/">Cart</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;