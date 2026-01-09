import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar">
        <ul className="navbar-nav"></ul>
            <li className="nav-item">
                <NavLink to="/" className="nav-link">
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                    About
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/services" className="nav-link">
                    Services
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                    Contact
                </NavLink>
            </li>
        
        </nav>
    );
    }
export default Navbar;
