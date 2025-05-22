import React from 'react'

const ExpereinceJob = ({ jobTitle, jobDescription, jobDate, jobCompany }) => {
  return (
    <div className='w-1/3'>
      <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>{jobTitle}</div>
      <div className='p-3 text-sm italic'>{jobDescription}</div>
      <div className='p-3 text-red-400 text-sm font-semibold'>{jobDate}</div>
      <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>{jobCompany}</div>
    </div>
  )
}

export default ExpereinceJob