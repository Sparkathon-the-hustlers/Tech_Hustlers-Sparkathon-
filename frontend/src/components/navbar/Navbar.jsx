import './Navbar.css';

function Navbar(){
    return(
        <nav className="navbar">
            <div className="nav-logo">web.logo</div>
            <input type="search" placeholder="search" className="nav-search"/>
            <ul className='nav-links'>
                <li><a href="/">Home</a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/">Home</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;