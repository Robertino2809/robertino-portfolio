"use client";

import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi"

export default function Home() {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/public/assets/resume/Robertino-Puhanić-CV.pdf'; // Replace with the actual path to your CV
    link.download = 'Robertino Puhanić - CV.pdf'; // Replace with the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none xl:mb-20">
            <h2 className="text-xl mb-4 font-semibold">Hello I am</h2>
            <h1 className="h1 mb-4">
              <span className="text-secondary">Robertino Puhanić</span>
            </h1>
            <h2 className="h2 mb-4">Frontend developer<br /> & UI/UX designer</h2>
            <p className="max-w-[500px] mb-4 text-third">Hello, I am Robertino, Frontend Developer and UI/UX Designer based in Croatia. 📍</p>
            {/* buttons and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
                variant="outline" 
                size="lg" 
                className="flex items-center gap-2 border-2 border-secondary rounded-full text-secondary" 
                onClick={handleDownload}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-11 h-11 border-2 border-secondary rounded-full flex justify-center items-center text-secondary text-base hover:bg-secondary hover:text-primary hover:tranisition-all duration-500" />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
