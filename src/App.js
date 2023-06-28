import React from 'react';
import './App.css';
import Header  from './components/Header'
import Banner from './components/Banner';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Projects from './components/Projects';

const  App = () => {
  return (
    <>
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
    <Header/>
    <Banner/>
    <Nav/>
    <About/>
    <Projects/>
    <Contact/>
    <div className='h-[3000px] '></div>
    </div>
    </>
  );
}

export default App;
