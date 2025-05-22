'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <motion.div className="h-full overflow-auto" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <div className="h-full flex flex-col lg:flex-row lg:gap-8 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-30 text-lg ">
        {/* // Image Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="./hero.png" alt="" fill className="object-contain"></Image>

        </div>

        {/* Text Containter */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold">Building the Intelligent World, Byte by Byte</h1>
          {/* Description */}
          <p className="">Beyond pixels and code lies true innovation. This portfolio showcases my passion for user-centered design, mastery of full-stack development, and a relentless drive to create exceptional digital experiences that solve real-world problems.</p>
          <div className="flex gap-4">
            <Link href={"/portfolio"}>
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white cursor-pointer">View My Work</button>
            </Link>
            <Link href={"/contact"}>
              <button className="p-4 rounded-lg ring-1 ring-black cursor-pointer" >Contact Me</button>
            </Link>
          </div>

        </div>
      </div>

    </motion.div>





  );
}
