'use client'
import TypingEffect from '@/components/TypingEffect'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'


const page = () => {
    const text = [
        { icon: "./moheri.png", strong: "Prestigious Scholarship Recipient", rest: "Awarded a distinguished Scholarship to the United States by the Ministry of Higher Education, Innovation & Research of the Sultanate of Oman, for the academic period of 2015 - 2019. This highly competitive scholarship supported studies abroad, reflecting a commitment to fostering advanced education and national talent." },
        { icon: "./fit.png", strong: "Academic Distinction - Cum Laude Honors", rest: "Graduated with Cum Laude Honors from the Florida Institute of Technology, Florida, United States of America, in 2019. This commendation signifies exceptional academic achievement, awarded for maintaining a superior grade point average throughout the course of study." },
        { icon: "./phi.png", strong: "Phi Eta Sigma Honor Society", rest: "Phi Eta Sigma is a national honor society that encourages and rewards academic excellence among first year college students. Founded at the University of Illinois in 1923, it is the nation's oldest and largest honor society for first-year college and university students in all disciplines." },

        { icon: "./Mitsubishi_logo.svg", strong: "Master's Degree Scholarship - Mitsubishi Sumitomo Corporation", rest: "Awarded a prestigious Master's Degree Scholarship by Mitsubishi Sumitomo Corporation in collaboration with the Ministry of Higher Education, Innovation & Research (MOHERI), Sultanate of Oman, for the academic years 2021-2023. This significant sponsorship underscores a commitment to advanced education and professional development." },
        { icon: "./kumdai.png", strong: "International Presentation: DSP Rhodes, Greece", rest: "Had the distinct honor of representing Kumamoto University at the prestigious DSP Rhodes conference in Greece, 2023. This international presentation showcased academic work and fostered global collaboration within the field." },
        { icon: "./oqbi1.png", strong: "Industry Engagement: Comex 2024", rest: "Represented OQ Base Industries at Comex 2024, a premier technology exhibition held in Muscat, Oman. This participation highlights engagement with cutting-edge industry trends and advancements." },
    ]
    const listItemVariants = {
        closed: {
            x: -10,
            opacity: 0
        },
        opened: {
            x: 0,
            opacity: 1

        }
    }
    return (
        <motion.div className="h-full overflow-auto relative  " initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>

            <div className='flex flex-col p-4 xm:p-8 sm:p-8 md:p-12 lg:p-20 xl:p-30 gap-10 xs:items-start md:items-start sm:items-start lg:items-center justify-center'>
                <h1 className='w-screen h-[10vh] flex items-center justify-center text-6xl text-center md:text-6xl lg:text-8xl sm:text-6xl xl:text-8xl'
                >
                    Awards
                </h1>
                <div className="h-full flex flex-col lg:flex-row lg:gap-10 px-4 py-2 md:gap:50 bg-red-50 rounded">

                    <motion.div className=' flex flex-col  items-center justify-center'
                        initial={{ opacity: 0, x: -400 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        viewport={{ once: true }} // Ensures animation runs only once

                    >
                        <Image src='./me.jpg'
                            alt=''
                            width={800}
                            height={600}
                            className='rounded'
                        />
                    </motion.div>

                    <motion.div className='flex flex-col gap-8 items-start justify-center p-4'>

                        {text.map((item, index) => (
                            <div key={index} className='flex gap-2 items-start'>
                                <Image className='object-contain' src={item.icon} alt="" width={32} height={32} />
                                <p key={index}><strong className='text-red-400'><TypingEffect text={item.strong} />:</strong> <TypingEffect text={item.rest} /></p>
                            </div>



                        ))
                        }
                    </motion.div>
                </div>


                {/* <motion.div
                    initial={{ opacity: 0, x: -400 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8 }}
                    viewport={{ once: true }} // Ensures animation runs only once

                >
                    <Image src='https://lh3.googleusercontent.com/zhc1sYokBohIm_hPjca8b4SigggPpV_dKm4IIOLQZfAO84a_NmV3LGruG6P7GqrV8qkR8YxMIvFdk-6r2g2m92Jic4BL2tsLNgsqZhCgiYF0f7eKLvJaALtDcbgcBUtcxg=w1280'
                        alt=''
                        width={800}
                        height={600}
                    />
                </motion.div> */}


            </div>

        </motion.div >
    )
}

export default page