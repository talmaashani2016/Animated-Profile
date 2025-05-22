'use client'
import ExperienceItemLeft from '@/components/ExperienceItemLeft'
import ExperienceItemRight from '@/components/ExperienceItemRight'
import Brain from '@/components/icons/Brain'
import Signature from '@/components/icons/Signature'
import { useScroll } from 'framer-motion'
import { useInView } from 'framer-motion'
import { motion } from 'framer-motion'
import React, { useRef } from 'react'





const AboutPage = () => {
    const containerRef = useRef()
    const { scrollYProgress } = useScroll({ container: containerRef })
    const skillRef = useRef()
    const isSkillRefInView = useInView(skillRef, { margin: "-100px" })
    const expereinceRef = useRef()
    const isExperienceRefInView = useInView(expereinceRef, { margin: "-100px" })
    return (
        <motion.div className="h-full " initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
            {/* Container */}
            <div className='h-full overflow-auto lg:flex' ref={containerRef}>
                {/* Text container */}
                <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-30 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 '>


                    {/* BioGraphy Container */}
                    <div className='flex flex-col gap-12 justify-center '>
                        <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
                        <p className='text-lg'>
                            Tariq B AL-Maashani is a skilled computer science professional with an MPhil from Kumamoto University, Japan,
                            and a BSc in Software Engineering from FIT, USA. My core competencies include software development,
                            artificial intelligence (AI), data analytics, and digital transformation, built upon a foundation of
                            strong algorithmic knowledge. With over 4 years of experience, I excel at delivering projects under pressure and driving
                            high performance across a range of industries, from banking to oil & gas.
                        </p>
                        <span className='italic'>
                            The path may bend, but my will to overcome does not.
                        </span>
                        <div className='self-end'>
                            <Signature />
                        </div>
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}

                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>

                    </div>
                    {/* skills */}
                    <div className='flex flex-col gap-12 justify-center' ref={skillRef}>
                        <motion.h1 initial={{ x: "-300px" }} animate={isSkillRefInView ? { x: 0 } : {}} transition={{ delay: 0.2 }} className='font-bold text-2xl'>Skills</motion.h1>
                        {/* skill list */}
                        <motion.div initial={{ x: "-300px" }} animate={isSkillRefInView ? { x: 0 } : {}} transition={{ delay: 0.2 }} className='flex gap-4 flex-wrap'>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>JavaScript</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Python</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Next.js</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>PyTorch</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Time series</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>ML</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Data Science</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>TensorFlow</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Tailwind CSS</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Linux Server</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Tailwind CSS</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Linux Server</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Java</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>C++</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>C#</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>TensorFlow</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Graph API</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Azure</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>R-Programming</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Graph API</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Azure</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>R-Programming</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>ML</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Data Science</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Dart Flutter</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>UI Front End</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Numpy</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Pandas</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Power Platform</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>MS SQL</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>TypeScript</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Docker</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>J-Unit</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>SciPy</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Windows Server 2022</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Aurdino C++</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>HTML</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Laravel</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>PHP</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Fine tuning - LLMs</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Node.js</div>
                        </motion.div>
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}

                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>

                    </div>
                    {/* expeirence */}
                    <div className='flex flex-col justify-center gap-12 pb-48' ref={expereinceRef}>
                        <motion.h1 initial={{ x: "-300px" }} animate={isExperienceRefInView ? { x: "0" } : {}} transition={{ delay: 0.2 }} className='font-bold text-2xl'>Experience</motion.h1>
                        {/* Experience List */}
                        <motion.div className='' initial={{ x: "-300px" }} animate={isExperienceRefInView ? { x: "0" } : {}} transition={{ delay: 0.2 }}>

                            <ExperienceItemLeft
                                jobTitle="Sr. Officer Demand & Digital Solutions"
                                jobDescription="Drives digital innovation, meets demands, and optimizes user solutions."
                                jobDate="Aug 2023 - Now"
                                jobCompany="OQ Base Industries - Oman"
                            />
                            <ExperienceItemRight
                                jobTitle="System Adminstrator"
                                jobDescription="Monitors, optimizes, and troubleshoots GPU performance across 10+ servers"
                                jobDate="May 2022 - June 2023"
                                jobCompany="Kumamoto University - Japan"
                            />
                            <ExperienceItemLeft
                                jobTitle="Digital Transformation Officer"
                                jobDescription="Strategizes, implements, and optimizes cutting-edge digital solutions for banking."
                                jobDate="Apr 2021 - Sep 2021"
                                jobCompany="Bank Muscat - Oman"
                            />
                            <ExperienceItemRight
                                jobTitle="Software Engineer"
                                jobDescription="Develops and maintains 150+ grid station inventory software"
                                jobDate="Oct 2020 - Jan 2021"
                                jobCompany="OETC - Oman"
                            />
                            <ExperienceItemLeft
                                jobTitle="Java Software Engineer"
                                jobDescription="Internship"
                                jobDate="Aug 2020 - Oct 2020"
                                jobCompany="Nortal - Estonia"
                            />
                            <ExperienceItemRight
                                jobTitle="Notwork Engineer - Entry"
                                jobDescription="Develops and maintains 150+ grid station inventory software"
                                jobDate="July 2020 - Aug 2020"
                                jobCompany="Huawei - Oman"
                            />
                            <ExperienceItemLeft
                                jobTitle="FOSS Program"
                                jobDescription="Summer Internship"
                                jobDate="Jun 2020 - Aug 2020"
                                jobCompany="Ministry of Transport, Communication and Information Technology  - Oman"
                            />

                        </motion.div>
                    </div>

                </div>

                {/* SVG Container */}
                <div className='hidden lg:block w-1/3 xl:1/2 sticky top-0 z-30 xl:1/2'>
                    <Brain scrollYProgress={scrollYProgress} />
                </div>
            </div>


        </motion.div>
    )
}

export default AboutPage