import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const Navbar = () => {
    const { user, logout, login } = useAuth();
    return (
        <nav>
            <ul>
                <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                <li><NavLink to="/products" className={({ isActive }) => isActive ? "active" : ""}>Products</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
                {user ? (
                    <>
                        <li><NavLink to="/kosar">Kosar</NavLink></li>
                        <li>
                            <button onClick={logout} className="logout-btn">
                                Kilépés
                            </button>
                        </li>
                    </>
                ) : (
                    <li><NavLink to="/login">Belépés</NavLink></li>
                )}
            </ul>
        </nav>
    )
}
export default Navbar;