'use client'
import { useScroll } from 'framer-motion'
import { useTransform } from 'framer-motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'

const PortfolioPage = () => {
    const ref = useRef()
    const items = [
        {
            id: 1,
            color: "from-red-300 to-blue-300",
            title: "AI-Powered PostgreSQL with Node.js",
            desc: " Unlock the power of your data with this Node.js project! It demonstrates an AI agent that connects directly to PostgreSQL, enabling intelligent interaction with your structured information. This is your essential toolkit for building applications that don't just store data, but actively understand, process, and leverage it.",
            img: "./aiProject.png",
            link: "https://github.com/talmaashani2016/AI-Agent-Tasks",
        },
        {
            id: 2,
            color: "from-blue-300 to-violet-300",
            title: "An Animated Portfolio Experience",
            desc: "Step into my world of innovation! This Next.js-powered animated portfolio offers a dynamic way to explore my certifications, professional milestones, and the impactful projects I've recently completed. Get a vivid sense of my skills and passion, and connect with me directly to discuss how I can contribute to your next endeavor.",
            img: "./profile.png",
            link: "https://github.com/talmaashani2016/",
        },
        {
            id: 3,
            color: "from-violet-300 to-purple-300",
            title: "Classifying Age and Sentiment from Voice using ML",
            desc: "Discover how machine learning can interpret human voice to reveal insights about age and sentiment. This project implements and evaluates a range of powerful algorithms, from the intricate patterns learned by Convolutional Neural Networks (CNN) to the robust capabilities of non-parametric classifiers such as K-Nearest Neighbors (KNN) and Label Propagation (LP). Our aim is to develop accurate and efficient models for understanding demographic and emotional cues embedded within speech.",
            img: "./classification.png",
            link: "https://ieeexplore.ieee.org/document/10167887",
        },
        {
            id: 4,
            color: "from-purple-300 to-red-300",
            title: "GNU-Cash Linux: CI & CD",
            desc: "Development of a GNU-Cash web application on Linux, focusing on expanding its capabilities. This involves the systematic process of installing and configuring new external libraries within the GNU-Cash Linux ecosystem. A critical component is the establishment of a Continuous Integration (CI) pipeline, likely leveraging Git for source code management, to automate testing procedures and maintain a high standard of code integrity and deployment readiness.",
            img: "./gnu.png",
            link: "https://github.com/talmaashani2016/gnucash",
        },
    ];

    const { scrollYProgress } = useScroll({ target: ref })
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"])
    return (
        <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
            <div className='h-[600vh] relative' ref={ref}>
                <div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center'>My Work</div>
                <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
                    <motion.div style={{ x }} className='flex'>
                        <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r  from-purple-300 to-red-300' />
                        {items.map(item => (
                            <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r  ${item.color}`} key={item.id}>
                                <div className='flex flex-col gap-8 text-white '>
                                    <h1 className='text-xl font-bold md:text-4xl lg:text-4xl xl:text-6xl'>{item.title}</h1>
                                    <div className='relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px] bg-cover bg-center'>
                                        <Image src={item.img} alt='' fill className='object-contain' />
                                    </div>
                                    <p className='w-80 md:w-96 lg:w-[500px] xl:w-[600px] lg:text-lg font-semibold'>{item.desc}</p>
                                    <Link href={item.link} className='flex justify-end' target='_blank'>
                                        <button className='p-1 cursor-pointer text-sm md:p-2 md:text-md lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded ring-4 ring-white hover:bg-transparent hover:text-white'>See Demo</button></Link>
                                </div>

                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <div className='w-screen  h-screen flex flex-col gap-16 items-center justify-center text-center'>
                <h1 className='text-4xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-8xl'>Do you have an idea?</h1>
                <div className='relative'>
                    <motion.svg
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                        viewBox="0 0 300 300"
                        className="w-64 h-64 md:w-[500px] md:h-[500px] "
                    >
                        <defs>
                            <path
                                id="circlePath"
                                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                            />
                        </defs>
                        <text fill="#000">
                            <textPath xlinkHref="#circlePath" className="text-md">
                                🏷️ AI Lead 🤖 Data Scientist 🔖 Digital Transformation
                            </textPath>
                        </text>
                    </motion.svg>
                    <Link href="/contact" className='h-16 w-16 md:w-28 md:h-28 absolute flex items-center justify-center  top-0 left-0 bottom-0 right-0 m-auto bg-black text-white rounded-full'>
                        Get in touch
                    </Link>


                </div>
            </div>
        </motion.div>
    )
}

export default PortfolioPage
