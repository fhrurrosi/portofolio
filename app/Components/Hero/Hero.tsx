'use client';
import React from 'react'
import SplitText from '../SplitText/SplitText'
import BlurText from '../BlurText/BlurText'
import ProfileCard from '../ProfileCard/ProfileCard'

const Hero = () => {
  return (
    <div>
        <div className='flex  ml-10 mr-10 h-screen items-center justify-between text text-center'>
            <div>
                <div>
                    <SplitText
                    text="Hello, I'm Fhrurrosi"
                    className="text-6xl font-bold text-center"
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
                <div>
                  <BlurText
                    text="Isn't this so cool?!"
                    delay={150}
                    animateBy="words"
                    direction="top"
                   
                    className="text-2xl mb-8"
                />
                </div>
            </div>
            <div>
            <ProfileCard className="mr-10"
                    name="fhrurrosi"
                    title="Frontend Developer"
                    handle="fhrurrosi"
                    status="Online"
                    contactText="Contact Me"
                    avatarUrl="/assets/kucing.png"
                    iconUrl="/assets/codingIcon.png"
                    showUserInfo={true}
                    enableTilt={true}
                    onContactClick={() => console.log('Contact clicked')}
                />
            </div>
        </div>
    </div>
  )
}

export default Hero