
'use client'
import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';



const ContactPage = () => {
    const form = useRef();
    const text = "Say Hello"
    const [sucess, setSucess] = useState(false)
    const [error, setError] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
        setError(false)
        setSucess(false)

        emailjs
            .sendForm("service_v89wamk", "template_1hhbbn9", {
                publicKey:"szD4rkXr0Kg6Kw1xt",
            })
            .then(
                () => {
                    setSucess(true)
                    form.current.reset()
                },
                (error) => {
                    console.log('FAILED...', error);
                    setError(true)

                },
            );
    };

    return (
        <motion.div className="h-full overflow-auto" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
            <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
                {/* Text container */}
                <div className='h-1/3 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl'>
                    <div>
                        {text.split("").map((letter, index) => (
                            <motion.span key={index}
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 0 }}
                                transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}>
                                {letter}
                            </motion.span>
                        ))}
                        😶
                    </div>
                </div>

                {/* Form container */}
                <div className='h-2/3-[20px] lg:h-full w-full lg:w-1/2 flex items-center justify-center lg:pb-20 lg:pt-20 md:pb-20'>
                    <form ref={form} onSubmit={sendEmail} className='flex bg-red-50 rounded-xl lg:text-xl text-md m-5 p-16 justify-center h-full-[20px] w-full flex-col gap-8 justifiy-center'>
                        <span>Dear Tariq AL Maashani, </span>
                        <textarea rows={4} name="user_message" placeholder='Add your Message here...' className='bg-transparent border-b-2 border-black outline-none resize-none' />
                        <span>My Email Address is:</span>
                        <input type="text" name="user_email" className='bg-transparent border-b-2 border-black outline-none' />
                        <span>Regards</span>
                        <button type="submit " className='bg-purple-200 rounded font-semibold text-gray-600 p-2 xl:p-4 cursor-pointer'>Send</button>
                        {sucess && <span className='text-green-600 font-semibold'> Your Message has been sent successfully!🫡</span>}
                        {error && <span className='text-red-600 font-semibold'> something went wrong! </span>}


                    </form>


                </div>

            </div>
        </motion.div>
    )
}

export default ContactPage
