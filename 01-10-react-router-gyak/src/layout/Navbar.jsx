import { Home, Users, Package } from 'lucide-react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="navbar">
      <div className="navbar-content">

        <button
          onClick={() => setCurrentPage('nyitolap')}
          className={`nav-button ${currentPage === 'nyitolap' ? 'active' : ''}`}
        >
          <Home size={18} />
          <span>Nyitólap</span>
        </button>

        <button
          onClick={() => setCurrentPage('users')}
          className={`nav-button ${currentPage === 'users' ? 'active' : ''}`}
        >
          <Users size={18} />
          <span>Felhasználók</span>
        </button>

        <button
          onClick={() => setCurrentPage('termekek')}
          className={`nav-button ${currentPage === 'termekek' ? 'active' : ''}`}
        >
          <Package size={18} />
          <span>Termékek</span>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
