"use client";

import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from "react-icons/fa"

import { SiTailwindcss, SiNextdotjs, SiAdobephotoshop } from "react-icons/si"

const about = {
  title: "About me",
  description: "Greetings! I'm a digital alchemist, turning lines of code and pixels into captivating web experiences. My journey into the world of web development began with a simple curiosity: how can I make the web a more beautiful and interactive place? This question led me to master the art of creating dynamic and engaging websites. I craft sites that are as fast as they are stylish, and my design toolkit allows me to sketch and polish ideas into visually stunning interfaces. When I'm not weaving digital magic, I'm probably exploring new tech innovations, diving into a gripping novel, or finding inspiration in nature’s splendor.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Robertino Puhanić"
    },
    {
      fieldName: "Email",
      fieldValue: "robertino.puhanic2809@gmail.com"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+385) 097 672 4628"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Croatian"
    },
    {
      fieldName: "Languages",
      fieldValue: "Croatian, English"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
  ]
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "Currently no working experience... 🙃",
  // items: [
  //   {
  //     company: "Example Inc.",
  //     position: "Junior Frontend developer",
  //     duration: "2023 - Present"
  //   },
  // ]
}

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "I hold a Bachelor's degree in Computer Science from the University of Osijek (2021-2024), where I specialized in web development and user experience design. My major projects included developing a comprehensive e-commerce platform. I also have The Complete Web Development Bootcamp certification from Udemy (2023)",
  items: [
    {
      institution: "Technical school in Osijek",
      degree: "Graphic Designer",
      duration: "2017 - 2021"
    },
    {
      institution: "University in Osijek",
      degree: "Bachelor's degree in computer science",
      duration: "2021 - 2024"
    },
    {
      institution: "Udemy",
      degree: "The Complete 2023 Web Development Bootcamp",
      duration: "2023 - 2023"
    },
  ]
}

const skills = {
  title: "My skills",
  description: "I am proficient in a range of tools and technologies essential for modern web development and design. My expertise includes HTML5 and CSS3 for crafting semantic and responsive layouts, and JavaScript and React.js for building dynamic and interactive user interfaces. I leverage Next.js for server-side rendering and optimized web applications, and use Tailwind CSS to streamline styling with utility-first principles. In addition to development skills, I am skilled in Figma for creating detailed UI/UX designs and Adobe Photoshop for high-quality graphic design and photo editing. These tools enable me to deliver cohesive and engaging digital experiences.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5"
    },
    {
      icon: <FaCss3 />,
      name: "css 3"
    },
    {
      icon: <FaJs />,
      name: "javascript"
    },
    {
      icon: <FaReact />,
      name: "react.js"
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css"
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js"
    },
    {
      icon: <FaFigma />,
      name: "figma"
    },
    {
      icon: <SiAdobephotoshop />,
      name: "adobe photoshop"
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div 
      initial={{opacity: 0}} 
      animate={{
        opacity: 1, 
        transition: {delay: 2, duration: 0.4, ease: "easeIn"},
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 xl:mb-5"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-third mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  {/* <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return <li key={index} className="bg-[#ebebeb] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-secondary">{item.duration}</span>
                        <h3 className="text-xl max-w-[300px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-secondary"></span>
                          <p className="text-zinc-600">{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul> */}
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-third mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return <li key={index} className="bg-[#ebebeb] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-secondary">{item.duration}</span>
                        <h3 className="text-xl max-w-[300px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-secondary"></span>
                          <p className="text-zinc-600">{item.institution}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-third mx-auto xl:mx-0">{skills.description}</p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] text-third ">
                  {skills.skillList.map((skill, index) =>{
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#ebebeb] rounded-xl flex justify-center items-center">
                            <div className="text-5xl hover:text-secondary transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-zinc-600 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-zinc-600">{item.fieldName}</span>
                        <span className="text-lg">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>

        </Tabs>
      </div>
    </motion.div>
  )
}
export default About