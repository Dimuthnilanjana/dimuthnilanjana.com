"use client";


import React from "react";



import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";
import {Card, CardHeader, CardBody, CardFooter, Image, Button,Link} from "@nextui-org/react";

export default function Portfolio() {
    const { ref } = useSectionInView("#Portfolio");
  return (
    
   
     <motion.div>
    <div className="max-w-[900px] gap-2 grid grid-cols-12  grid-rows-2 px-8   pb-28 ">
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
       
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="/po5.png"
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="/po4.png"
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="/po3.png"
      />
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src="/po2.png"
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
       
        
      </CardFooter>
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        
      </CardHeader>
      <Image
        removeWrapper
        alt="background"
        className="z-0 w-full h-full object-cover"
        src="/po1.png"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="icon"
            className="rounded-full w-10 h-11 bg-black"
            src="/dp.png"
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">View all</p>
            <p className="text-tiny text-white/60">Branding projects on</p>
          </div>
        </div>
        <Link
        isExternal
        href="https://be.net/dimuthnilanjana"
        showAnchorIcon
        className="  text-white"
      >
        Behance
      </Link>
      </CardFooter>
    </Card>
  </div>
  </motion.div>   
 
  
  );
}
