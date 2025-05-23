'use client';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react'
import Navbar from './Navbar';
import { usePathname } from 'next/navigation';

const TransitionProvider = ({ children }) => {
    const pathName = usePathname()

    return (
        <AnimatePresence mode='wait'>
            <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100">
                <motion.div className='h-screen w-screen fixed bg-black rounded-b-[100px] z-40'
                    animate={{ height: "0vh", }}
                    exit={{ height: "140vh" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                <motion.div layoutRoot style={{ position: "fixed" }} className="m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit sm:pointer-auto pointer-events-none"
                    initial={{ opacity: 1, }}
                    animate={{ opacity: 0, }}
                >
                    {pathName.slice(1).charAt(0).toUpperCase() + pathName.slice(2)}
                </motion.div>
                <motion.div className='h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30'
                    initial={{ height: "140vh", }}
                    animate={{ height: "0vh", transition: { delay: 0.8 } }}
                />

                <div className="h-24">
                    <Navbar />

                </div>
                <div className="h-[calc(100vh-6rem)]">
                    {children}

                </div>

            </div>

        </AnimatePresence>
    )
}

export default TransitionProvider