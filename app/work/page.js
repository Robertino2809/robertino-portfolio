"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiAdobephotoshop, SiThreedotjs } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const skills = {
  skillList: [
    { icon: <FaHtml5 />, name: "html 5" },
    { icon: <FaCss3 />, name: "css 3" },
    { icon: <FaJs />, name: "javascript" },
    { icon: <FaReact />, name: "react.js" },
    { icon: <SiTailwindcss />, name: "tailwind.css" },
    { icon: <SiNextdotjs />, name: "next.js" },
    { icon: <FaFigma />, name: "figma" },
    { icon: <SiAdobephotoshop />, name: "adobe photoshop" },
  ],
};

const projects = [
  {
    num: "1",
    category: "full-stack",
    title: "Print Alfa Fullstack Web Shop",
    description: "This project is a comprehensive Full-stack e-commerce platform developed for a graphic design company using Next.js, React, and Tailwind CSS, and served as the final project for graduation. The platform features an admin dashboard where administrators can add, remove, and edit products, add and remove categories, you can also watch all your orders. On the front end, users can browse products, add items to their cart, and complete purchases through a Stripe-integrated checkout system. The platform also includes secure user authentication for login and registration, ensuring a smooth and secure shopping experience.",
    stack: [
      { icon: <FaReact />, name: "react.js" },
      { icon: <SiNextdotjs />, name: "next.js" },
      { icon: <SiTailwindcss />, name: "tailwind.css" },
      { icon: <FaFigma />, name: "figma" },
      { icon: <SiAdobephotoshop />, name: "adobe photoshop" },
    ],
    image: "/assets/work/thumbnail1.png",
    live: "https://printalfa-front.vercel.app/",
    github: "https://github.com/Robertino2809/printalfa-front",
  },
  {
    num: "2",
    category: "frontend",
    title: "Video Alfa website",
    description: "This project is a sleek and responsive web frontend developed for a local photo studio using React and Tailwind CSS. The platform offers a modern and user-friendly interface, allowing clients to easily browse through the studio's gallery and contact the studio. Leveraging React component-based architecture, the site ensures dynamic content updates and smooth user interactions. Tailwind CSS provides a utility-first approach to styling, enabling rapid and customized design that aligns with the studio's branding. This project highlights the ability to create visually appealing and functional web applications tailored to specific business needs.",
    stack: [
      { icon: <FaReact />, name: "react.js" },
      { icon: <SiTailwindcss />, name: "tailwind.css" },
      { icon: <FaFigma />, name: "figma" },
      { icon: <SiAdobephotoshop />, name: "adobe photoshop" },
    ],
    image: "/assets/work/thumbnail2.png",
    live: "https://www.wedding-alfa.com",
    github: "",
  },
  {
    num: "3",
    category: "frontend",
    title: "Apple website",
    description: "This project is a visually stunning and responsive web frontend designed as an Apple clone website, crafted with React, Tailwind CSS, Three.js, and GSAP animations. The platform offers a sophisticated and user-friendly interface, providing visitors with an immersive experience as they explore the site's features. Utilizing React's component-based architecture, the site ensures dynamic content updates and seamless user interactions. Tailwind CSS delivers a utility-first approach to styling, enabling rapid and customized design that mirrors Apple's clean and modern aesthetic. Three.js brings the site to life with engaging 3D graphics, while GSAP animations add fluid transitions and interactive elements. This project demonstrates the capability to develop cutting-edge web applications that are both visually captivating and highly functional, tailored to emulate the renowned Apple website experience.",
    stack: [
      { icon: <FaReact />, name: "react.js" },
      { icon: <SiTailwindcss />, name: "tailwind.css" },
      { icon: <SiThreedotjs />, name: "three.js" },
    ],
    image: "/assets/work/thumbnail4.png",
    live: "https://apple-website-teal.vercel.app/",
    github: "https://github.com/Robertino2809/apple-website",
  },
  {
    num: "4",
    category: "UI/UX",
    title: "Vibes Mobile App Design",
    description: "This UI/UX design project was crafted for a Fiverr client and is centered on Vibes Mobile App, a unique social media platform where users can listen to music, buy cryptocurrency, and reward others with crypto for their musical creations. The app also features an integrated crypto wallet, enabling seamless financial transactions within the platform. The design emphasizes a user-friendly and visually engaging interface that enhances the user experience, making navigation intuitive and enjoyable. Each aspect of the app, from the music player to the crypto wallet, was meticulously designed to ensure both functionality and aesthetic appeal, providing users with a seamless and immersive experience.",
    stack: [
      { icon: <FaFigma />, name: "figma" },
      { icon: <SiAdobephotoshop />, name: "adobe photoshop" },
    ],
    image: "/assets/work/thumbnail3.png",
    live: "https://dribbble.com/shots/24538913-Vibes-Mobile-App?added_first_shot=true",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1, 
        transition: {delay: 1.5, duration: 0.4, ease: "easeIn"} 
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] h-[50%]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-6xl font-extrabold text-secondary">{project.num}</div>
              <div>
                <h2 className="text-[42px] font-bold text-third group-hover:text-secondary transition-all duration-500 capitalize">
                  {project.category} project
                </h2>
                <p className="text-zinc-600">{project.description}</p>
                <ul className="flex gap-4 mt-4 mb-4">
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className="text-4xl text-third hover:text-secondary">
                        {item.icon}
                      </li>
                    );
                  })}
                </ul>
                <div className="border border-stone-300"></div>
                <div className="flex items-center gap-4 mt-2">
                  {/* live project button */}
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-[#ebebeb] flex justify-center items-center group">
                          <BsArrowUpRight className="text-3xl group-hover:text-secondary" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  {/* github project button */}
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-[#ebebeb] flex justify-center items-center group">
                          <BsGithub className="text-3xl group-hover:text-secondary" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-[#ebebeb]">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-cover" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-[#ebebeb] text-third text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-full" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
