import './Navbar.css';

function Navbar(){
    return(
        <nav className="navbar">
            {/* <div className="nav-logo">web.logo</div> */}
            <a href="#Home" className='nav-logo'>web.logo</a>
            <input type="search" placeholder="search" className="nav-search"/>
            <ul className='nav-links'>
                <li><a href="/">Home</a></li>
                <li><a href="/">Store</a></li>
                <li><a href="/">Cart</a></li>
                <li><a href="/">Login</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;