import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

import Main from './layout/Main.jsx'
import Footer from './layout/Footer.jsx'
import Header from './layout/Header.jsx'
import Navbar from './layout/Navbar.jsx'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Navbar />
      <Footer />

    </BrowserRouter>
  )
}


export default App
