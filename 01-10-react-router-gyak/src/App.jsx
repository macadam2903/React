import { useState } from 'react'
import ListaTermek from './pages/ListaTermek'
import Main from './layout/Main'
import ListaUser from './pages/ListaUser'
import Nyitolap from './pages/Nyitolap'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Navbar from './layout/Navbar'

import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('termekek');

  return (
    <div className="app-container">
      <Header />
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Main>
        {currentPage === 'termekek' && <ListaTermek />}
        {currentPage === 'users' && <ListaUser />}
        {currentPage === 'nyitolap' && <Nyitolap />}
      </Main>
      <Footer />
    </div>
  );
}

export default App