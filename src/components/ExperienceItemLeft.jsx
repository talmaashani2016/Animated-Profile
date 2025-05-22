import React from 'react'
import ExpereinceJob from './ExpereinceJob'
import ExperienceCenter from './ExperienceCenter'


const ExperienceItemLeft = ({ jobTitle, jobDescription, jobDate, jobCompany }) => {
  return (
    <div className='flex justify-between h-48'>
      <ExpereinceJob jobTitle={jobTitle} jobDescription={jobDescription} jobDate={jobDate} jobCompany={jobCompany} />
      <ExperienceCenter />
      <div className='w-1/3'></div>
    </div>
  )
}

export default ExperienceItemLeft