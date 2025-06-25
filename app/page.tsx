'use client'
import React from 'react'
import Hero from './Components/Hero/Hero'
import ScrollVelocity from './Components/ScrollVelocity/ScrollVelocity'
import AboutMe from './Components/AboutMe/AboutMe'
const page = () => {
  return (
    <div className='overflow-x-hidden '>
      <Hero />
     
      <AboutMe />
    </div>
  )
}

export default page