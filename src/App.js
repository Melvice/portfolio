import React from 'react';
import './App.css';
import Header  from './components/Header'
import Banner from './components/Banner';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Formation from './components/formation';

const  App = () => {
  return (
    <>
    <div className='bg-site bg-no-repeat bg-contain'>
    <Header/>
    <Banner/>
    <Nav/>
    <About/>
    <Formation/>
    <Projects/>
    <Contact/>
    </div>
    </>
  );
}

export default App;
