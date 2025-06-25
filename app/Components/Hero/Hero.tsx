'use client';
import React from 'react'
import SplitText from '../SplitText/SplitText'
import BlurText from '../BlurText/BlurText'
import ProfileCard from '../ProfileCard/ProfileCard'
import TrueFocus from '../TrueFocus/TrueFocus'
import Threads from '../Threads/Threads'
const Hero = () => {
  return (
        <div className='relative flex flex-col h-screen items-center justify-center text text-center'>
            <div >
                <div>
                    <SplitText
                    text="M Fahrur Rosi"
                    className="text-[100px] font-bold text-center"
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
                        sentence = "Eat Code Sleep"
                        manualMode={false}
                        blurAmount={5}
                        borderColor="#ffffff"
                        animationDuration={1.5}
                        pauseBetweenAnimations={1}

                    />   
                </div>
            </div>

           <div style={{ width: '100%', height: '600px', position: 'absolute', top: 120, zIndex: -1}}>
            <Threads
                amplitude={1}
                distance={0}
                enableMouseInteraction={false}
            />
</div>             
        </div>
          
  )
}

export default Hero