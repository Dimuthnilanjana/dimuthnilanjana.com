"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useLanguage } from "@/containers/language-context";
import { useSectionInView } from "@/lib/useInView";
import { Card, CardHeader, CardBody, CardFooter, Image, Divider, Link, Button } from "@nextui-org/react";
import {Tooltip} from "@nextui-org/react";


export default function About() {
  const { ref } = useSectionInView("#about");
  const { languageStrings } = useLanguage();

  return (
    <motion.section
      className="max-w-[45rem] text-center leading-8 mb-28 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}
      id="about"
    >
      <SectionHeading>{languageStrings.about.title}</SectionHeading>
      <p className="mb-3  lg:text-xl  sm:text-lg  text-justify   pb-4">
        I am a software engineering undergraduate student
        at NIBM ,Sri Lanka. I'm expert in UI/UX design and web development 
        . My journey in the world of design began in 2019,
        and since then, I've successfully completed over 100 commercial
        projects for both local and international clients.

        <br></br><br></br>
        In 2022, I embarked on my front-end development career,
        gaining expertise in HTML, CSS, JavaScript, React, Next.js, Tailwind CSS,
        MongoDB, MySQL, and more. As a dedicated freelancer, I am passionate
        about delivering top-notch solutions to meet and exceed the
        expectations of my clients.
      </p>

     

      <div className="flex items-center justify-center pt-6 ">
        <Card className="max-w-[600px] bg-white border-black   dark:bg-gray-800  rounded-2xl dark:border-gray-300  shadow-2xl hover:scale-[1.04]  transform transition-transform">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={60}
             
              src="/dp.png"
              width={60}
              className="rounded-full object-cover shadow-xl "
            />
            <div className="flex flex-col">
              <p className="text-md font-semibold">Dimuth Nilanjana</p>
              <Link href="https://bio.link/dimuthnilanjana" size="sm" isExternal className=" hover:text-sky-400">
          @Dimuthnilanjana
        </Link>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className=" pb-5">
              <p className=" font-semibold  ">
              🎓Higher National Diploma in Software Engineering
              </p>
              <p className=" text-sm italic  font-normal">
              📖Reading<br />
              📚National Institute of Business Management - 2023
              </p>
            </div>
            <div className=" pb-5">
              <p className=" font-semibold  ">
              🎓Diploma in Software Engineering
              </p>
              <p className=" text-sm italic  font-normal">
              🎯GPA 3.80<br />
              📚National Institute of Business Management - 2023
              </p>
            </div>
            <div className="">
              <p className=" font-semibold  ">
              🎓St/Aloysius'College, Galle
              </p>
              <p className=" text-sm italic  font-normal">
              
              ✅Completed GCE AL Exam in Physical Science Stream - 2019
              </p>
            </div>
          </CardBody>
          <Divider />
          <CardFooter>
          <Tooltip placement="bottom" showArrow={true} content="You can find me on every social media through this bio link"
          
          className="  bg-indigo-400 dark:bg-indigo-400  rounded-2xl "
          >
            <Link
              isExternal
              showAnchorIcon
              href="https://bio.link/dimuthnilanjana"
              className="  hover:text-indigo-400"
            >
              Find me on Socials.
            </Link>
            </Tooltip>
          </CardFooter>
        </Card>
      </div>
    </motion.section>
  );
}
