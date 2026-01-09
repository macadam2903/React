import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './layout/Main.jsx';
import Footer from './layout/Footer.jsx';
import Header from './layout/Header.jsx';
import Fooldal from './pages/Fooldal.jsx';
import Listaoldal from './pages/Listaoldal.jsx';
import ReceptReszletek from './pages/ReceptReszletek.jsx';
import Kereses from './pages/Kereses.jsx';
import Admin from './pages/Admin.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Fooldal />} />
          <Route path="receptek" element={<Listaoldal />} />
          <Route path="receptek/:id" element={<ReceptReszletek />} />
          <Route path="kereses" element={<Kereses />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;