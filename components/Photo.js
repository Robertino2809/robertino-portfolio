"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.5, duration: 0.3, ease: "easeIn"}}}>
        <motion.div 
          initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1, duration: 0.3, ease: "easeInOut"}}}
          className="w-[320px] h-[320px] xl:w-[450px] xl:h-[450px]">
          <Image 
            src="/assets/photo.png" 
            priority 
            quality={100} 
            fill 
            alt="" 
            className="object-contain" 
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
export default Photo