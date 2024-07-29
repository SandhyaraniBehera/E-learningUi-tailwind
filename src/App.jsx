import React from 'react'
import './App.css';


//pages directory
import Home from './pages/Home';
import About from './pages/About';
import Resources from './pages/Resources';
import Gallery from  './pages/Gallery';
import Contact from './pages/Contact';

//components directory
import Header from './components/Header';
import Banner from './components/Banner';
import Aboutus from './components/Aboutus';
import Experts from './components/Experts';
import Skills from './components/Skills';
import Plans from './components/Plans';
import Contact1 from './components/Contact1';
import Footer from './components/Footer';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>

      {/* <Banner/>
      <Aboutus />
      <Experts />
      <Skills />
      <Plans />
      <Contact1 />
      <Footer /> */}

      
      
    </div>
  )
}

export default App