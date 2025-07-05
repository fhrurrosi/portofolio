"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { div } from "framer-motion/client";
// Removed unused import
// import { comma } from 'postcss/lib/list';

const experiences = [
  {
    id: 1,
    title: "Student Landing Page",
    company: "Personal Project",
    year: "2023",
    description:
      "Developed a responsive landing page using Next.js and Tailwind CSS. Included a brief profile, portfolio section, and scroll-triggered animations.",
    logo: "/assets/reactjs.svg",
  },
  {
    id: 2,
    title: "Anime Streaming Website",
    company: "Personal Project",
    year: "2024",
    description:
      "Designed a basic anime streaming platform using React and Tailwind CSS. Features include anime search and genre-based filtering.",
    logo: "/assets/reactjs.svg",
  },
  {
    id: 3,
    title: "Village Information System",
    company: "Personal Project",
    year: "2024",
    description:
      "Built a fictional village information website displaying village profile, resident data, news, and announcements using HTML, CSS, and JavaScript.",
    logo: "/assets/reactjs.svg",
  },
  {
    id: 4,
    title: "Netflix Clone",
    company: "Personal Project",
    year: "2025",
    description:
      "Experimented with building a Netflix-style streaming website using React and React Three Fiber. Focused on modern UI and 3D transitions powered by WebGL.",
    logo: "/assets/reactjs.svg",
  },
];




const ExperienceTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Adjust offset as needed
  });

  // Smooth the scroll progress value for the line and dot
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    // Increased restDelta slightly. This means the spring animation
    // will consider itself 'at rest' sooner, potentially reducing
    // updates when the dot reaches the end of the scroll.
    restDelta: 0.01,
  });

  // Create a motion value for the dot's top position, based on the *sprung* scaleY value
  // We map the scaleY value (which goes from 0 to 1) to the full height of the container (0% to 100%)
  const dotTop = useTransform(scaleY, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 mt-10"
    >
      {/* Central Timeline Line */}
      {/* Framer Motion automatically promotes transform properties for hardware acceleration */}
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-cyan-600 to-cyan-800 transform -translate-x-1/2"
        style={{ scaleY: scaleY, transformOrigin: "top" }}
      />

      {/* Glowing Dot */}
      {/* Framer Motion handles the 'top' style updates efficiently */}
      <motion.div
        className="absolute left-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_5px_rgba(0,255,255,0.5)] transform -translate-x-1/2"
        // Use the dotTop motion value (derived from the sprung scaleY) for the top style
        style={{ top: dotTop }}
        // Optional: Add will-change property as a hint to the browser (use with caution)
        // className="absolute left-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_5px_rgba(0,255,255,0.5)] transform -translate-x-1/2 will-change-top"
      />

      <div className="relative space-y-24">
        {experiences.map((exp, index) => (
          // Changed grid to 2 columns, removed the 'auto' middle column
          <div
            key={exp.id}
            className="relative grid grid-cols-1 md:grid-cols-2 items-start gap-x-20 bg-black rounded-2xl p-6 shadow-lg md:bg-transparent"
          >
            {/* Side 1: Title, Company, Year, Logo - Conditional Alignment */}
            <div
              className={`flex flex-col ${
                index % 2 === 0
                  ? "md:items-end md:text-right"
                  : "md:items-start md:text-left"
              } ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}
            >
              <h3 className="md:text-2xl text-xl font-bold text-gray-100">
                {exp.title}
              </h3>

              <p className="text-lg text-cyan-400 mb-1">{exp.company}</p>
              {/* Year */}
              <span
                className="md:text-xl text-md font-regular text-gray-400 mb-2"
                style={{ letterSpacing: "0.4em" }}
              >
                {exp.year}
              </span>

              {/* Logo */}
              <div className="w-10 h-10 relative flex items-center justify-center md:my-0 my-5">
                {" "}
                {/* Added flex centering for logos */}
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  fill
                  style={{ objectFit: "contain" }} // Use contain to show the whole logo
                  unoptimized // Keep if necessary for SVGs, but test without if possible
                />
              </div>
            </div>

            {/* Side 2: Description - Conditional Alignment */}
            <div
              className={`text-gray-300 md:text-lg text:md ${
                index % 2 !== 0 ? "md:text-right" : "text-left"
              } ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}
            >
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
