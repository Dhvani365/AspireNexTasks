import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar, Hero, About, Experience, Tech, Works, Contact, StarsCanvas } from './components'

function App() {

  return (
    <BrowserRouter>
        <div className='relative z-0 bg-primay'>
          <div className='bg-hero-parent bg-cover bg-no-repeat bg-center'>
              <Navbar/>
              <Hero/>
          </div>
          <About/>
          <Experience/>
          <Tech/>
          <Works/>
          <div className='relative z-0'>
            <Contact/>
            <StarsCanvas/>
          </div>          
        </div>
    </BrowserRouter>  
  )
}

export default App
