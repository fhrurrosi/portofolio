'use client';
import React from 'react'
import SplitText from '../SplitText/SplitText'
import TrueFocus from '../TrueFocus/TrueFocus'
import Threads from '../Threads/Threads'
import ScrollVelocity from '../ScrollVelocity/ScrollVelocity'

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center min-h-screen text-center overflow-hidden">
      <div className="absolute top-[150px] left-0 right-0 bottom-0 -z-10">
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={false}
        />
      </div>

      <SplitText
        text="M Fahrur Rosi"
        className="text-[100px] font-bold text-center mt-32"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />

      <div >
        <TrueFocus 
          sentence="Eat Code Sleep"
          manualMode={false}
          blurAmount={5}
          borderColor="#ffffff"
          animationDuration={1.5}
          pauseBetweenAnimations={1}
        />
      </div>
      <div className="h-[50vh]"></div>
      <div className="w-full">
        <ScrollVelocity
          texts={['FRONTEND WEB DEVELOPER']} 
          velocity={100} 
          className="custom-scroll-text"
        />
      </div>
    </div>
  )
}

export default Hero
