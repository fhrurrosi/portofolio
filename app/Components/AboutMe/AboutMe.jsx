import React from 'react'
import SplitText from '../SplitText/SplitText'
import ProfileCard from '../ProfileCard/ProfileCard'
import ScrambledText from '../ScrambledText/ScrambledText'
const AboutMe = () => {
    return (
        <div className='flex items-start justify-start h-screen w-full px-20'>
            <div className='pt-[50px] '>
                <ProfileCard
                    name="M Fahrur Rosi"
                    title="Frontend Developer"
                    handle="fhrurrosi"
                    status="Online"
                    contactText="Contact Me"
                    avatarUrl="/assets/kucing.png"
                    iconUrl="/assets/Codeicon.pngscro"
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
                <div >
                    <ScrambledText
                        className='m-0 text-[16px]'
                        radius={100}
                        duration={1.2}
                        speed={0.5}
                        scrambleChars={".:"}
>
                   I am an Information Technology student with a deep interest in frontend development and user interface design. My journey in tech began with a curiosity about how websites work and evolved into a strong passion for building seamless, responsive, and user-friendly web applications. Over time, I have developed a particular focus on React and Next.js—tools that I enjoy using and continue to explore to build fast, scalable, and maintainable applications with a component-driven approach. I actively seek opportunities to grow beyond the classroom by working on personal projects, collaborating with others, and staying updated with modern frontend trends, accessibility standards, and responsive design principles. Driven by a desire for continuous growth, I strive to not only improve technically but also develop strong collaboration, communication, and problem-solving skills. I believe frontend development is the perfect intersection of creativity and logic, and I aim to contribute to impactful digital solutions through thoughtful and user-focused design.
                </ScrambledText>
            </div>
        </div>
          
        </div >
    )
}

export default AboutMe