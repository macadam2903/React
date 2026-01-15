import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Navbar from './layout/Navbar'
import Main from './layout/Main'
import { AuthProvider } from './context/AuthContext'



function App() {


  return (
    <>
   <BrowserRouter>
    <AuthProvider>
    <Header />
    <Navbar />
    <Main>
    </Main>
    <Footer />
    </AuthProvider>
    </BrowserRouter>
  

    </>
  )
}

export default App
