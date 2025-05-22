import React from 'react'

const ExperienceCenter = () => {
    return (
        <div className='flex justify-center w-1/6'>

            {/* line */}
            <div className='w-1 h-full bg-gray-600 rounded relative'>
                {/* circle */}
                <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
            </div>
        </div>
    )
}

export default ExperienceCenter