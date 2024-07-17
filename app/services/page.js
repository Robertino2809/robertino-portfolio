"use client"; // Ensure this is at the top of your file

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Transforming visions into engaging, responsive websites that not only look stunning but perform flawlessly. From sleek landing pages to robust web apps, I code with creativity and precision.'
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description: 'Designing user experiences that delight and interfaces that intuitively guide. I blend form and function to create digital experiences users love and remember.'
  },
  {
    num: '03',
    title: 'Graphic Design',
    description: 'Turning ideas into striking visuals that tell your brand’s story. I create graphics that capture attention and communicate your message with artistry and impact.'
  },
  {
    num: '04',
    title: 'Branding',
    description: 'Building brands that stand out and connect deeply with your audience. I craft unique brand identities that embody your values and vision, ensuring you leave a lasting impression.'
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{
            opacity: 1,
            transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]" 
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-4xl font-extrabold text-secondary">{service.num}</div>
                </div>
                {/* title */}
                <h1 className="font-bold text-2xl">{service.title}</h1>
                {/* description */}
                <p>{service.description}</p>
                <div className="border-b border-black w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
