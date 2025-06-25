'use client';
import React from 'react'
import SplitText from '../SplitText/SplitText'
import BlurText from '../BlurText/BlurText'
import ProfileCard from '../ProfileCard/ProfileCard'
import TrueFocus from '../TrueFocus/TrueFocus'
import Threads from '../Threads/Threads'
const Hero = () => {
  return (
    <div className='overflow-x-hidden'>
        <div className='flex flex-col ml-10 mr-10 h-screen items-center justify-center text text-center'>
            <div >
                <div>
                    <SplitText
                    text="M Fahrur Rosi"
                    className="text-[90px] font-bold text-center"
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
                </div>
                <div > 
                    <TrueFocus 
                        sentence = "Eat  Code  Sleep"
                        manualMode={true}
                        blurAmount={5}
                        borderColor="#ffffff"
                        animationDuration={1.5}
                        pauseBetweenAnimations={1}

                    />   
                </div>
                
                
            </div>
           
       
        </div>
          
    </div>
  )
}

export default Hero