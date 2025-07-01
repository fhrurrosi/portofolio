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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis molestiae eius earum commodi? Nostrum id sint, assumenda sit adipisci officiis dolore doloribus sed dolorem. Suscipit a consequuntur quibusdam consequatur repellat.
                </ScrambledText>
            </div>
        </div>
          
        </div >
    )
}

export default AboutMe