import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Recepttár</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink 
                                to="/" 
                                className={({isActive}) => 
                                    isActive ? "nav-link active fw-bold" : "nav-link"
                                }
                            >
                                Kezdőlap
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/receptek" className="nav-link">
                                Receptek
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/kereses" className="nav-link">
                                Keresés
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin" className="nav-link">
                                Admin
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;