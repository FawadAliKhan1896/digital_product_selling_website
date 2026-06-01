import React, { useState } from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import TrustedBy from '../components/TrustedBy'
import Services from '../components/Services'
import Works from '../components/Works'
import Team from '../components/Team'
import GitHub from '../components/GitHub'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { Toaster } from 'react-hot-toast'

const Home = ({ theme, setTheme, products }) => {
  return (
    <div className='dark:bg-black relative'>
      <Toaster />
      <Nav theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <Works products={products} />
      <Testimonials />
      <Team />
      <FAQ />
      <GitHub />
      <Contact />
      <Footer theme={theme} />
    </div>
  )
}

export default Home