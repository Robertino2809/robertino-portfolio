"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope } from "react-icons/fa"
import { motion } from "framer-motion";

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+385) 097 672 4628"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "robertino.puhanic2809@gmail.com"
  }
]

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gs89miv', 'template_xmyic0k', form.current, {
        publicKey: 'nwU5Kq7I-Alsz28eA',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const notify = () => {
    toast.success('Email sent succesfully! 😀', {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1, 
        transition: {delay: 1.5, duration: 0.4, ease: "easeIn"} 
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] xl:w-[54%] order-2 xl:order-none">
            <form 
              ref={form} onSubmit={sendEmail}
              className="flex flex-col gap-6 p-10 bg-[#ebebeb] rounded-xl">
              <h3 className="text-4xl text-secondary">Lets work together</h3>
              <p className="text-third">Lets Create Something Amazing Together</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  type="text"
                  name="user_name" 
                  placeholder="First Name" 
                />
                <Input 
                  type="lastname"
                  name="user_last" 
                  placeholder="Last Name" 
                />
                <Input 
                  type="email"
                  name="user_email" 
                  placeholder="Email" 
                />
                <Input 
                  type="phone" 
                  name="user_phone"
                  placeholder="Phone number" 
                />
              </div>
              <Select name="user_service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem 
                      value="web" 
                      name="service_web"
                      className="cursor-pointer"
                    >
                      Web Development
                    </SelectItem>
                    <SelectItem 
                      value="uiux" 
                      name="service_uiux"
                      className="cursor-pointer"
                    >
                      UI/UX Design
                    </SelectItem>
                    <SelectItem 
                      value="design" 
                      name="service_design"
                      className="cursor-pointer"
                    >
                      Graphic Design
                    </SelectItem>
                    <SelectItem 
                      value="branding" 
                      name="service_branding"
                      className="cursor-pointer"
                    >
                      Branding
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea name="message" className="h-[200px]" placeholder="Type your message here." />
              {/* button */}
              <Button 
                type="submit"
                value="Send" 
                size="md" 
                className="max-w-40"
                onClick={notify}
              >
                Send message
              </Button>
            </form>
            <ToastContainer />
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[60px] xl:h-[60px] bg-[#ebebeb] text-secondary rounded-md flex items-center justify-center">
                      <div className="text-[20px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-third">{item.title}</p>
                      <h3 className="text-lg">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
export default Contact