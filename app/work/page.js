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
    category: "Full-stack",
    title: "Print Alfa Web Shop",
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
    category: "Frontend",
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
    category: "Frontend",
    title: "Apple website",
    description: "This project is a visually stunning and responsive web frontend designed as an Apple clone website, crafted with React, Tailwind CSS, Three.js, and GSAP animations. The platform offers a sophisticated and user-friendly interface, providing visitors with an immersive experience as they explore the site's features. Utilizing React's component-based architecture, the site ensures dynamic content updates and seamless user interactions. Tailwind CSS delivers a utility-first approach to styling, enabling rapid and customized design that mirrors Apple's clean and modern aesthetic. Three.js brings the site to life with engaging 3D graphics, while GSAP animations add fluid transitions and interactive elements.",
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
    category: "Frontend",
    title: "Elektro Deni website",
    description: "This project is a visually appealing and responsive web frontend developed as a sleek, modern website using React, Tailwind CSS, and EmailJS for the contact form. Built with a component-based architecture in React, the platform ensures smooth user interactions and dynamic content updates. Tailwind CSS enables a streamlined and efficient design process, providing a utility-first approach that makes customization fast and easy. For handling contact form submissions, EmailJS is integrated to allow seamless communication without the need for a server, ensuring an intuitive user experience throughout the site.",
    stack: [
      { icon: <FaReact />, name: "react.js" },
      { icon: <SiTailwindcss />, name: "tailwind.css" },
    ],
    image: "/assets/work/thumbnail6.png",
    live: "https://elektro-deni.vercel.app/",
    github: "",
  },
  {
    num: "5",
    category: "UI/UX",
    title: "Foodoo Mobile App Design",
    description: "Foodoo is a dynamic app that seamlessly blends the art of healthy cooking with the convenience of meal delivery, designed to support your nutritious lifestyle. It offers a wide array of curated recipes catering to various dietary preferences, from vegetarian and vegan to gluten-free and low-carb, while also allowing you to order freshly prepared, nutrient-rich meals delivered right to your doorstep. With personalized meal planning, in-app nutrition tracking, and easy ingredient shopping, Foodoo makes it simple to maintain a balanced diet. The app also features cooking tutorials, community engagement, and tools to manage dietary restrictions, making healthy eating both accessible and enjoyable.",
    stack: [
      { icon: <FaFigma />, name: "figma" },
      { icon: <SiAdobephotoshop />, name: "adobe photoshop" },
    ],
    image: "/assets/work/thumbnail5.png",
    live: "https://www.behance.net/gallery/204361377/Foodoo-Mobile-App",
    github: "",
  },
  {
    num: "6",
    category: "UI/UX",
    title: "Vibes Mobile App Design",
    description: "This UI/UX design project was crafted for a Fiverr client and is centered on Vibes Mobile App, a unique social media platform where users can listen to music, buy cryptocurrency, and reward others with crypto for their musical creations. The app also features an integrated crypto wallet, enabling seamless financial transactions within the platform. The design emphasizes a user-friendly and visually engaging interface that enhances the user experience, making navigation intuitive and enjoyable. Each aspect of the app, from the music player to the crypto wallet, was meticulously designed to ensure both functionality and aesthetic appeal, providing users with a seamless and immersive experience.",
    stack: [
      { icon: <FaFigma />, name: "figma" },
      { icon: <SiAdobephotoshop />, name: "adobe photoshop" },
    ],
    image: "/assets/work/thumbnail3.png",
    live: "https://www.behance.net/gallery/204383053/Music-App",
    github: "",
  },
  {
    num: "7",
    category: "Frontend",
    title: "Fitness application",
    description: "This project is a dynamic and responsive fitness exercises platform built with React and powered by Rapid API for data fetching. The site offers users a seamless experience, providing access to a wide range of fitness exercises and related information through an intuitive interface. Leveraging React's component-based architecture, the platform ensures real-time data updates and smooth navigation. By utilizing Rapid API, it efficiently fetches exercise data from external sources, enhancing the site's functionality and allowing users to explore and customize their fitness routines with ease.",
    stack: [
      { icon: <FaReact />, name: "react.js" }
    ],
    image: "/assets/work/thumbnail7.png",
    live: "https://fitness-app-nine-zeta.vercel.app/",
    github: "https://github.com/Robertino2809/fitness-app",
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
      {/* Project 1 */}
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="lg:py-24">
                <h2 className="text-3xl font-bold sm:text-4xl">{projects[0].title}</h2>
                <h2 className="text-xl font-bold mt-5">{projects[0].category}</h2>

                <p className="mt-4 text-gray-600">
                  {projects[0].description}
                </p>
                <div className="flex gap-6 mt-4 mb-4">
                  {projects[0]?.stack.map((stackItem, index) => (
                    <div key={index} className="text-5xl">
                      {stackItem.icon}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-2">
                  {/* live project button */}
                  <Link href={projects[0].live}>
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
              <div className="relative h-52 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                  alt=""
                  src="/assets/work/thumbnail1.png"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Project 2 */}
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="lg:py-24">
                <h2 className="text-3xl font-bold sm:text-4xl">{projects[1].title}</h2>
                <h2 className="text-xl font-bold mt-5">{projects[1].category}</h2>

                <p className="mt-4 text-gray-600">
                  {projects[1].description}
                </p>
                <div className="flex gap-6 mt-4 mb-4">
                  {projects[1]?.stack.map((stackItem, index) => (
                    <div key={index} className="text-5xl">
                      {stackItem.icon}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-2">
                  {/* live project button */}
                  <Link href={projects[1].live}>
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
              <div className="relative h-52 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                  alt=""
                  src="/assets/work/thumbnail2.png"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Project 3 */}
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="lg:py-24">
                <h2 className="text-3xl font-bold sm:text-4xl">{projects[2].title}</h2>
                <h2 className="text-xl font-bold mt-5">{projects[2].category}</h2>

                <p className="mt-4 text-gray-600">
                  {projects[2].description}
                </p>
                <div className="flex gap-6 mt-4 mb-4">
                  {projects[2]?.stack.map((stackItem, index) => (
                    <div key={index} className="text-5xl">
                      {stackItem.icon}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-2">
                  {/* live project button */}
                  <Link href={projects[2].live}>
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
              <div className="relative h-52 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                  alt=""
                  src="/assets/work/thumbnail4.png"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Project 4 */}
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="lg:py-24">
                <h2 className="text-3xl font-bold sm:text-4xl">{projects[3].title}</h2>
                <h2 className="text-xl font-bold mt-5">{projects[3].category}</h2>

                <p className="mt-4 text-gray-600">
                  {projects[3].description}
                </p>
                <div className="flex gap-6 mt-4 mb-4">
                  {projects[3]?.stack.map((stackItem, index) => (
                    <div key={index} className="text-5xl">
                      {stackItem.icon}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-2">
                  {/* live project button */}
                  <Link href={projects[3].live}>
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
                </div>
              </div>
              <div className="relative h-52 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                  alt=""
                  src="/assets/work/thumbnail6.png"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Project 5 */}
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="lg:py-24">
                <h2 className="text-3xl font-bold sm:text-4xl">{projects[4].title}</h2>
                <h2 className="text-xl font-bold mt-5">{projects[4].category}</h2>

                <p className="mt-4 text-gray-600">
                  {projects[4].description}
                </p>
                <div className="flex gap-6 mt-4 mb-4">
                  {projects[4]?.stack.map((stackItem, index) => (
                    <div key={index} className="text-5xl">
                      {stackItem.icon}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-2">
                  {/* live project button */}
                  <Link href={projects[4].live}>
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
                </div>
              </div>
              <div className="relative h-52 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                  alt=""
                  src="/assets/work/thumbnail5.png"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Project 6 */}
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="lg:py-24">
                <h2 className="text-3xl font-bold sm:text-4xl">{projects[5].title}</h2>
                <h2 className="text-xl font-bold mt-5">{projects[5].category}</h2>

                <p className="mt-4 text-gray-600">
                  {projects[5].description}
                </p>
                <div className="flex gap-6 mt-4 mb-4">
                  {projects[5]?.stack.map((stackItem, index) => (
                    <div key={index} className="text-5xl">
                      {stackItem.icon}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-2">
                  {/* live project button */}
                  <Link href={projects[5].live}>
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
                </div>
              </div>
              <div className="relative h-52 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                  alt=""
                  src="/assets/work/thumbnail3.png"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Project 7 */}
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="lg:py-24">
                <h2 className="text-3xl font-bold sm:text-4xl">{projects[6].title}</h2>
                <h2 className="text-xl font-bold mt-5">{projects[6].category}</h2>

                <p className="mt-4 text-gray-600">
                  {projects[6].description}
                </p>
                <div className="flex gap-6 mt-4 mb-4">
                  {projects[6]?.stack.map((stackItem, index) => (
                    <div key={index} className="text-5xl">
                      {stackItem.icon}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-2">
                  {/* live project button */}
                  <Link href={projects[6].live}>
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
                </div>
              </div>
              <div className="relative h-52 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                  alt=""
                  src="/assets/work/thumbnail7.png"
                  className="absolute inset-0 h-96 lg:mt-20 w-full "
                />
              </div>
            </div>
          </div>
        </section>
    </motion.section>
  );
};

export default Work;




