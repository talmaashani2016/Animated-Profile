'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { motion } from "framer-motion"


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const topVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: 45,
            backgroundColor: "rgb(255,255,255)"

        }
    }
    const centerVariants = {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
        }
    }
    const bottomVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: -45,
            backgroundColor: "rgb(255,255,255)"

        }
    }

    const listVariants = {
        closed: {
            x: "100vw"
        },
        opened: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2
            }

        }
    }
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
    const links = [
        { url: "/", title: "Home" },
        { url: "/about", title: "About" },
        { url: "/portfolio", title: "Portfolio" },
        { url: "/awards", title: "Awards" },
        { url: "/certificates", title: "Certificates" },
        { url: "/contact", title: "Contact" },
    ]
    return (
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-30 text-lg'>
            <div className='hidden md:flex gap-4 w-1/3 justify-start'>
                {links.map(link => (
                    <NavLink key={link.title} link={link} />
                ))}
            </div>

            {/* Logo */}
            <div className=' lg:hidden  xl:flex xl:w-1/2 xl:justify-center'>
                <Link href="/" className="flex items-center justify-center text-sm bg-black rounded-md p-1 font-semibold">
                    <span className='text-white mr-1 ml-1'>Tariq</span>
                    <span className='flex items-center justify-center w-22 h-8 rounded bg-white text-black'> AL Maashani</span>
                </Link>
            </div>

            {/* icons links */}
            <div className='hidden md:flex gap-4 w-1/3 justify-end'>
                <Link href="https://github.com/talmaashani2016">
                    <Image src="/github.png" alt="" width={24} height={24} />
                </Link>
                <Link href="https://www.linkedin.com/in/tariq-almaashani/">
                    <Image src="/linkedin.png" alt="" width={24} height={24} />
                </Link>

                <Link href="https://ieeexplore.ieee.org/document/10167887">
                    <Image src="/ieee.png" alt="" width={65} height={24} />
                </Link>
            </div>

            {/* Menu Button */}

            <div className='md:hidden'>

                <button className='w-10 h-8 flex flex-col justify-between z-51 relative cursor-pointer' onClick={() => setOpen(!open)}>
                    <motion.div animate={open ? "opened" : "closed"} variants={topVariants} className='w-10 h-1 bg-black rounded origin-left'></motion.div>
                    <motion.div animate={open ? "opened" : "closed"} variants={centerVariants} className='w-10 h-1 bg-black rounded'></motion.div>
                    <motion.div animate={open ? "opened" : "closed"} variants={bottomVariants} className='w-10 h-1 bg-black rounded origin-left'></motion.div>
                </button>

                {/* MenuList */}
                {open && (
                    <motion.div variants={listVariants} initial="closed" animate="opened" className='absolute text-4xl top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 z-50'>
                        {links.map(link => (
                            <motion.div key={link.title} variants={listItemVariants}>
                                <Link href={link.url}>{link.title}</Link>
                            </motion.div>

                        ))}
                    </motion.div>
                )}

            </div>
        </div>
    )
}

export default Navbar