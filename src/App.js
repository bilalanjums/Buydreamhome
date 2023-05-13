import React from'react';
//rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Galleriya from './pages/Galleriya';
import CreateAccount from './pages/CreateAccount';
//componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Galleriya />} />
          <Route path='/create-account' element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;