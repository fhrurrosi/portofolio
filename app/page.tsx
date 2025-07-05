"use client"
import React from "react";
import Hero from "./Components/Hero/Hero";
import ScrollVelocity from "./Components/ScrollVelocity/ScrollVelocity";
import AboutMe from "./Components/AboutMe/AboutMe";
import ExperienceTimeline from "./Components/ExperienceTimeline/ExperienceTImeline";
import SplitText from "./Components/SplitText/SplitText";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";

const page = () => {
  const projectList = [
    {
      id: 1,
      number: "01",
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with Next.js and Tailwind CSS.",
      techstack: [
        "/assets/nextjs.svg",
        "/assets/reactjs.svg",
        "/assets/tailwindcss.svg",
      ],
      imageSrc: "https://picsum.photos/id/1015/600/400",
      link: "https://example.com/portfolio",
    },
    {
      id: 2,
      number: "02",
      title: "Online Store",
      description:
        "A simple e-commerce application powered by React and Firebase.",
      techstack: [
        "/assets/nextjs.svg",
        "/assets/reactjs.svg",
        "/assets/tailwindcss.svg",
      ],
      imageSrc: "https://picsum.photos/id/1025/600/400",
      link: "https://example.com/toko",
    },
    {
      id: 3,
      number: "03",
      title: "Admin Dashboard",
      description:
        "An admin monitoring dashboard with charts and key statistics.",
      techstack: [
        "/assets/nextjs.svg",
        "/assets/reactjs.svg",
        "/assets/tailwindcss.svg",
      ],
      imageSrc: "https://picsum.photos/id/1035/600/400",
      link: "https://example.com/dashboard",
    },
    {
      id: 4,
      number: "04",
      title: "Educational Game",
      description:
        "A web-based educational game for kids with interactive animations.",
      techstack: [
        "/assets/nextjs.svg",
        "/assets/reactjs.svg",
        "/assets/tailwindcss.svg",
      ],
      imageSrc: "https://picsum.photos/id/1045/600/400",
      link: "https://example.com/game",
    },
    {
      id: 5,
      number: "05",
      title: "Note-Taking App",
      description:
        "A lightweight to-do list and daily note app for productivity.",
      techstack: [
        "/assets/nextjs.svg",
        "/assets/reactjs.svg",
        "/assets/tailwindcss.svg",
      ],
      imageSrc: "https://picsum.photos/id/1055/600/400",
      link: "https://example.com/noteapp",
    },
    {
      id: 6,
      number: "06",
      title: "Product Landing Page",
      description:
        "A promotional product page with animations and strong CTAs.",
      techstack: [
        "/assets/nextjs.svg",
        "/assets/reactjs.svg",
        "/assets/tailwindcss.svg",
      ],
      imageSrc: "https://picsum.photos/id/1065/600/400",
      link: "https://example.com/landing",
    },
  ];

  return (
    <div className="overflow-x-hidden ">
     {/* <Navbar className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md dark:bg-neutral-900/80">
        <NavBody>
          <NavbarLogo />
          <NavItems
            items={[
              { name: "Home", link: "#home" },
              { name: "About", link: "#about" },
              { name: "Projects", link: "#projects" },
              { name: "Contact", link: "#contact" },
            ]}
          />
          <NavbarButton href="#contact">Hire Me</NavbarButton>
        </NavBody>
      </Navbar> */}
      <Hero />
      <AboutMe />
      <div className="flex flex-col justify-center items-center text-[50px]">
        <SplitText
          text="My Experience"
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
        <ExperienceTimeline />
      </div>
      <div className="w-full flex flex-col items-center justify-center py-10">
        <SplitText
          text="My Project"
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

        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-10 max-w-screen-lg">
            {projectList.map((project, index) => (
              <Skills key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
      <Contact />
      {/* <Lanyard /> */}
    </div>
  );
};

export default page;
