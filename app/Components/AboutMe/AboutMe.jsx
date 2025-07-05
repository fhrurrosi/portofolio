import React from 'react'
import SplitText from '../SplitText/SplitText'
import ProfileCard from '../ProfileCard/ProfileCard'
const AboutMe = () => {
    return (
        <div id='about' className='flex items-start justify-start h-screen w-full px-20'>
            <div className='pt-[50px] '>
                <ProfileCard
                    name="M Fahrur Rosi"
                    title="Frontend Developer"
                    handle="fhrurrosi"
                    status="Online"
                    contactText="Contact Me"
                    avatarUrl="/assets/kucing.png"
                    iconUrl="/assets/Codeicon.png"
                    showUserInfo={true}
                    enableTilt={true}
                    onContactClick={() => console.log('Contact clicked')}
                />
            </div>
            <div className='container mx-auto pl-[30px] pt-[30px]'>
                <div>
                    <SplitText
                        text="About Me"
                        className="text-[60px] font-bold text-start"
                        delay={100}
                        duration={3}
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
                    <p className='text-[24px]'>  Hi, I'm Rosi — a frontend developer passionate about creating clean, interactive, and responsive user interfaces.
                        I specialize in building websites with modern technologies like React, Next.js, and Tailwind CSS. My journey began with curiosity about how websites work, and now I enjoy turning designs into real, functional experiences.
                        In every project, I focus on performance, accessibility, and great user experience. I’m always learning, experimenting with animations, motion design, and exploring new frontend tools.
                        Outside of coding, I enjoy playing games, exploring new UI inspirations, and occasionally diving into backend logic when needed.
                    </p>

                </div>
            </div>

        </div >
    )
}

export default AboutMe