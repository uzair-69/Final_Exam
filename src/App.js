import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from './components/HeroSection';
import Section from './components/Section2';
import Future from './components/Future';



function App() {
  return (

    <div className="body">
    <Header />
    <HeroSection />
    <Section />
    <Future />
    <Routes>

    </Routes>
    <Footer />
  </div> 
  );
}

export default App;
