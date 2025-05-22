'use client'
import Cetri from '@/components/Cetri'
import { motion } from 'framer-motion'
import React from 'react'

const page = () => {
    const certificates = [
        { title: "CompTIA A+ Part I", desc: "IT support, hardware, software, networking, troubleshooting, security.", img: "/a+.png", link: "" },
        { title: "PRINCE2 Foundation", desc: "Foundation for project team members - Covers principles, themes, processes for structured project delivery", img: "/prince2.png", link: "https://drive.google.com/file/d/1ZBEZGJlhGHsnLxN9qcFBR29RBIGEjpvJ/view" },
        { title: "Huawei HCIA", desc: "switching, IP networks, configuration, troubleshooting Huawei devices. Foundation for network engineers", img: "/huawei.png", link: "https://drive.google.com/file/d/1dLPxrVbH_URQOMqNvqZi47m29gRlkLzC/view" },
        { title: "CFI - Reading Financial Statements", desc: "Fundamentals of financial statements (Income, Balance, Cash Flow). Analyzes company health, performance, annual reports. Essential for financial analysis and informed decisions", img: "/cfi.png", link: "https://www.credential.net/25d11ffd-5b7e-4909-b2a1-cf6e35f4c6d4#acc.OUN9hmwo" },
        { title: "1 Million Arab Coders", desc: "Online coding education for Arab youth. Aims to equip with future digital skills, create job opportunities. Focuses on web, app development, data analysis, AI.", img: "/1million.jpg", link: "" },
        { title: "Cisco Introduction to Internet of Things", desc: "undamental IoT concepts, digital transformation, device connectivity, data, automation, and security. Provides foundational knowledge for IoT careers.", img: "/cisco.png", link: "" },
        { title: "Cyber Secuirty - E-Learning", desc: "ocus on foundational knowledge and practical skills for digital protection including:  cybercrime, threats, tools, and policy", img: "/cyber.jpg", link: "" },
        { title: "Oman AI Summit 2024", desc: "focused on Artificial Intelligence in the Sultanate of Oman. It's organized by the Ministry of Transport, Communications and Information Technology.", img: "/ai_summit.jpg", link: "https://lh3.googleusercontent.com/A9OWBcy5lYjKv7xQ9CTzeL-z3Fl3TF7ZiyzJtTYHopSJvtjGkUwmYrOQDYayoniGW4qHbSF7zo814xFKb7BtysNe3F6oSdbfkt9-Vq0HGB5B9WxxwK08_9aUEF57DX-OAQ=w1280" },
        { title: "Test Dome - SQL", desc: "practice SQL queries. Simulates real database scenarios. Assesses SQL skills (SELECT, JOINs, CRUD, etc.). Ideal for learning, interview prep, or skill validation.", img: "/testDome.svg", link: "https://www.testdome.com/certificates/c6bc5c4243124cb3b0c088d00486f9ac" },
        { title: "OIE - Introduction to Cloud Computing", desc: "Foundational course. Covers cloud models (IaaS, PaaS, SaaS), deployment types, benefits, and key technologies. Essential for understanding modern IT infrastructure.", img: "/oie.jpg", link: "" },
        { title: "Introduction to Large Language Models", desc: "Introductory course on LLMs. Covers fundamentals, use cases, prompt tuning, and Google's Gen AI tools. Explains transformer architecture, training, and various LLMs.", img: "/linkedin.png", link: "https://www.linkedin.com/learning/certificates/b7b585b41fe1b510efc35df6d402c153defb7365d7820de7f4fd0d3c80d3cbd3?u=103520282" },
        { title: "Data Visualization: Storytelling", desc: "Focuses on communicating insights effectively through visuals. Teaches how to craft compelling narratives with data. Emphasizes audience, clarity, and impact in presentations.", img: "/linkedin.png", link: "https://www.linkedin.com/learning/certificates/c46d864e374321ffc362cc94a857575240e4c35cd74007e5e7f4b487902c08fc?trk=share_certificate" },
        { title: "Database Foundations: Intro to Databases", desc: "Covers data models, relational databases, SQL queries (DDL, DML), normalization, and database design principles. ", img: "/linkedin.png", link: "https://www.linkedin.com/learning/certificates/155273a3ea6f37da8af8abae9cbf0aad7ed08314905f365768cfae86bf771923?trk=share_certificate" },
        { title: "Smarter Note-Taking with Microsoft 365", desc: "Leverages Microsoft 365 apps (OneNote, Outlook, Teams, Whiteboard, etc.).", img: "/linkedin.png", link: "https://www.linkedin.com/learning/certificates/3b600da3fd748bb6c316012caa873dac2a58d8219fea91240dd7dd4f75751806?trk=share_certificate" },
        { title: "Transitioning from Waterfall to Agile Project Management", desc: "Explores differences, benefits, and challenges of Waterfall vs. Agile. Guides project professionals on adopting Agile methodologies.", img: "/linkedin.png", link: "https://www.linkedin.com/learning/certificates/9f2e3067b935275f33a56de8719f8baa381a9a5dc94233281bd15fabaf33856f?trk=share_certificate" },
        { title: "Introducing AI to Your Organization", desc: "Guidance on integrating AI strategically within businesses. Covers identifying opportunities, developing an AI strategy, ethical considerations, and preparing an organization for AI adoption.", img: "/linkedin.png", link: "https://www.linkedin.com/learning/certificates/c2efab7dce82ff6c6ce039d749e5719ae866013491c455aefddae2b769d2d020?trk=share_certificate" },
        { title: "Communicating with Confidence", desc: "Focuses on developing strong communication skills. Covers active listening, clear expression, non-verbal cues, and building rapport.", img: "/linkedin.png", link: "https://www.linkedin.com/learning/certificates/4c4d5eab5da86084dc614674602a7ae26202d01ad0b933ddd15ee9e1e5b34a33?trk=share_certificate" },

    ]

    return (
        <motion.div className="h-full overflow-auto relative  " initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
            <div className='flex flex-col p-4 xm:p-8 sm:p-8 md:p-12 lg:p-20 xl:p-30 gap-10 items-center justify-center'>
                <h1 className='w-screen h-[20vh] flex items-center justify-center text-6xl text-center md:text-6xl lg:text-8xl sm:text-6xl xl:text-8xl'> Certificates</h1>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.3 } }, // Stagger effect
                    }} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-stretch gap-5 justify-center'>
                    {certificates.map((item, index) => (
                        <motion.div key={index}
                            className='flex items-strexch'
                            variants={{
                                hidden: { opacity: 0, x: -800 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            viewport={{ once: true }} // Ensures animation runs only once
                        >

                            <Cetri key={index} title={item.title} desc={item.desc} img={item.img} link={item.link} />
                        </motion.div>

                    ))}





                </motion.div>

            </div>


        </motion.div >
    )
}

export default page