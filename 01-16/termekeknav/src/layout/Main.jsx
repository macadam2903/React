import { useAuth } from '../context/AuthContext.jsx'
import { useNavigate } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home.jsx'
import Products from '../pages/Products.jsx'
import Contact from '../pages/Contact.jsx'
import Kosar from '../pages/Kosar.jsx'
import Login from '../pages/Login.jsx'

const Main = () => {
    const { user} = useAuth();

    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                {user ? (
                    <>
                        <Route path="/kosar" element={<Kosar />} />
                        <Route path="/logout" element={<Home />} />
                    </>
                ) : (
                    <Route path="/login" element={<Login />} />
                )}
            </Routes>
        </main>
    )
}
export default Main;
