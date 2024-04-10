"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";

import toast from "react-hot-toast";
import { useLanguage } from "@/containers/language-context";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@nextui-org/react";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  
} from "react-icons/fa";



export default function Contact() {
  const { ref } = useSectionInView("#contact");
  const { activeLanguage } = useLanguage();

  const [senderEmail, setSenderEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async () => {
    const formData = { senderEmail, message };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const { data, error } = await response.json();

      if (error) {
        toast.error(error);
        return;
      }
      if (data) {
        setSenderEmail("");
        setMessage("");
        toast.success("Email sent successfully!");
      }
    } catch (error: unknown) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>
        {activeLanguage === "It" ? "Contatami" : "Contact Me"}
      </SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        {activeLanguage === "It"
          ? "Non esitare a contattarmi tramite questo form"
          : "Feel free to contact me directly click through below links"}
      </p>
      <br></br>

      <div className="   grid sm:grid-rows-4 sm:grid-flow-col md:grid-rows-4 md:grid-flow-col lg:grid-rows-4 lg:grid-flow-col gap-4 ">


        <Card className="  bg-white border-black  rounded-lg  dark:bg-gray-800 shadow-xl transform transition-transform hover:scale-[1.04]">
          <CardHeader className=" flex-auto">
            <FaEnvelope
              size="35px" />
            <h1 className=" font-bold px-3"> Send Me a Email !</h1>
          </CardHeader>
          <Divider />
          <CardBody className="  text-justify  italic ">
            <p className=" ">Unlock creativity! Connect with me via email for your incredible projects.
              Let's collaborate and bring your ideas to life 📧 . </p>
          </CardBody>
          <Divider />
          <CardFooter>
            <div className=" content-center">
              <Link
                isExternal
                showAnchorIcon
                href="mailto:contact@dimuthnilanjana.com"
                className=" hover:text-sky-400"
              >
                Click to send a email.
              </Link>
            </div>
          </CardFooter>
        </Card>

        <Card className="  bg-white border-black  rounded-lg  dark:bg-gray-800 shadow-xl  transform transition-transform hover:scale-[1.04]">
          <CardHeader className=" flex-auto">
            <FaGithub
              size="35px" />
            <h1 className=" font-bold px-3"> Send me a pull request!</h1>
          </CardHeader>
          <Divider />
          <CardBody className="  text-justify  italic ">
            <p className=" ">
              "Discover my GitHub repository - a hub for coding adventures! Connect with me, collaborate on exciting projects,
              and let's turn ideas into reality through the power of code. 🚀" </p>
          </CardBody>
          <Divider />
          <CardFooter>
            <div className=" content-center">
              <Link
                isExternal
                showAnchorIcon
                href="https://github.com/Dimuthnilanjana"
                className=" hover:text-sky-400"
              >
                Click to checkout latest repositories.
              </Link>
            </div>
          </CardFooter>
        </Card>

        <Card className="  bg-white border-black  rounded-lg  dark:bg-gray-800  shadow-xl transform transition-transform hover:scale-[1.04]">
          <CardHeader className=" flex-auto">
            <FaLinkedin
              size="35px" />
            <h1 className=" font-bold px-3"> Let's Connect on LinkedIn!</h1>
          </CardHeader>
          <Divider />
          <CardBody className="  text-justify  italic ">
            <p className=" ">
              "Exploring new opportunities and connections. Connect with me on LinkedIn for professional networking, collaborations, and engaging discussions. 
              Let's build a meaningful professional network together! 👥" </p>
          </CardBody>
          <Divider />
          <CardFooter>
            <div className=" content-center">
              <Link
                isExternal
                showAnchorIcon
                href="https://linkedin.com/in/dimuthnilanjana"
                className=" hover:text-sky-400"
              >
                Click to connect.
              </Link>
            </div>
          </CardFooter>
        </Card>

        <Card className="  bg-white border-black  rounded-lg  dark:bg-gray-800  shadow-xl transform transition-transform  hover:scale-[1.04]">
          <CardHeader className=" flex-auto">
            <FaInstagram
              size="35px" />
            <h1 className=" font-bold px-3">Follow the Gram Vibes!</h1>
          </CardHeader>
          <Divider />
          <CardBody className="  text-justify  italic ">
            <p className=" ">
            "Dive into a visual journey! Follow me on Instagram for snapshots of life, passion projects, and a sprinkle of creativity. 
            Let's share moments and inspiration together. See you in the feed! 📸  </p>
          </CardBody>
          <Divider />
          <CardFooter>
            <div className=" content-center ">
              <Link
                isExternal
                showAnchorIcon
                href="https://www.instagram.com/dimuth_nilanjana/"
                className=" hover:text-sky-400"
              >
                Click to follow
              </Link>
            </div>
          </CardFooter>
        </Card>

        













      </div>



    </motion.section>
  );
}
