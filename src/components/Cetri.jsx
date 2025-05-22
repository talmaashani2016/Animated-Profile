import { redirect } from 'next/dist/server/api-utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import toast from 'react-hot-toast'

const Cetri = ({ title, desc, img, link }) => {
    return (
        <div className=' flex flex-col bg-white p-4 font-semibold rounded-b-lg rounded-s-lg'>
            <div className='flex gap-4 items-center justify-between '>
                <h3 className='text-2xl font-semibold'>{title}</h3>
                <Image className='p-2' src={img} alt='' width={56} height={56} />
            </div>

            <p className='text-gray-500 justify-start pb-2'> {desc}</p>

            <div className='flex items-center justify-between mt-auto'>

                <button className=" p-2 rounded-lg ring-1 ring-black cursor-pointer" onClick={() => {
                    if (link.length === 0) {
                        toast.error("Credentials unavailable for certificate.");
                    } else {
                        window.open(link, "_blank", "noopener,noreferrer");
                    }
                }} >View</button>
                <div className='flex p-2'>⭐⭐⭐⭐⭐</div>
            </div>


        </div>

    )
}

export default Cetri