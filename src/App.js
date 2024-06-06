import React, { useState } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Hero } from './Components/Hero/Hero';
import { Program } from './Components/Programs/Programs';
import { Title } from './Components/Title/Title';
import { About } from './Components/About/About';
import { Campus } from './Components/Campus/Campus';
import { Testimonials } from './Components/Testimonials/Testimonials';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';
import { ViderPlayer } from './Components/VideoPlayer/VideoPlayer';

function App() {

  const [play,setplay]=useState(false)


  return (
   <>
  <Navbar/>
  <Hero/>
  <div className='container'>
    <Title subTitle='Our PROGRMA' title='What We Offer'/>
  <Program/>
  <About setplay={setplay}/>
  <Title subTitle='Gallery' title='Campus Photos'/>
  <Campus/>
  <Title subTitle='Testimonials' title='What Student Says'/>
  <Testimonials/>
  <Title subTitle='Contact Us' title='Get In Touch'/>
  <Contact/>
  <Footer/>
  </div>
  <ViderPlayer play={play} setplay={setplay}/>
   </>
  );
}

export default App;
