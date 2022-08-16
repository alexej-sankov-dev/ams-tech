import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


function App() {
  return (
    <div className='pageWrapper'>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
