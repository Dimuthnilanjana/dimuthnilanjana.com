"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/useInView";
import { useActiveSectionContext } from "@/containers/active-section";
import { useLanguage } from "@/containers/language-context";
import { Mail } from "lucide-react";
import Typewriter from 'typewriter-effect';

import {Button, ButtonGroup} from "@nextui-org/react";


export default function Intro() {
  const { ref } = useSectionInView("#home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { languageStrings } = useLanguage();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/imagedp.jpg"
              width="250"
              height="250"
              alt="portrait"
              quality="95"
              priority={true}
              className="rounded-full object-cover shadow-2xl  hover:scale-[1.1] "
            />
          </motion.div>
          <motion.span
            className="text-6xl absolute bottom-0 left-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              damping: 10,
              duration: 0.2,
            }}
          >

          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold  text-lg">Hello , My name is</span><br></br>
        <span className="font-bold  sm:text-5xl ">Dimuth Nilanjana,</span>
        <span className="font-bold">I'm a</span>
        <Typewriter 
          options={{
            strings: ['Web Developer', 'UI/UX Designer', 'Brand Identity Designer'],
            autoStart: true,
            loop: true,
          }}
        />
      </motion.h1>




      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <div className=" btn-group flex gap-3"  >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("#contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          {languageStrings.intro.contact} <Mail color={"#9ca3af"} />
        </Link>
       
        <Link
          href="https://drive.google.com/file/d/14tdfGdpdh5i91Q6_bi2ARj2AGKOTHbIp/view?usp=sharing"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
         
          Download CV
        </Link>

      
      

        </div>
        
         <div className=" group flex gap-3">
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/dimuthnilanjana/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Dimuthnilanjana"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
        </div>
      </motion.div>
    </section>
  );
}
