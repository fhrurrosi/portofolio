"use client";
import React from "react";
import SplitText from "../SplitText/SplitText";
import TrueFocus from "../TrueFocus/TrueFocus";
import Threads from "../Threads/Threads";
import ScrollVelocity from "../ScrollVelocity/ScrollVelocity";
import CircularText from "../CircularText/CircularText";
const Hero = () => {
  return (
    <div id="home" className="relative flex flex-col items-center min-h-screen text-center overflow-hidden">
      <div className="absolute top-[150px] left-0 right-0 bottom-0 -z-10">
        <Threads amplitude={1} distance={0} enableMouseInteraction={false} />
      </div>
      <div className="absolute bottom-[130px] left-[30px]">
        <CircularText
          text="M*FAHRUR*ROSI*"
          onHover="speedUp"
          spinDuration={20}
          className="custom-class"
        />
      </div>
      <div className="flex flex-col  gap-y-1 w-[40px] h-[40px] fixed bottom-[70px] right-[30px] z-10">
        <a href="https://github.com/fhrurrosi"><img src="/assets/githublogo.png" alt="githublogo" /></a>
        <a href="https://www.linkedin.com/in/m-fahrur-rosi-954190336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src="/assets/Linkedinlogo.jpeg" alt="Linktind" /></a>
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

      <div>
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
          texts={["FRONTEND WEB DEVELOPER"]}
          velocity={100}
          className="custom-scroll-text"
        />
      </div>
    </div>
  );
};

export default Hero;
