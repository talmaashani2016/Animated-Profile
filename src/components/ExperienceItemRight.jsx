import React from 'react'
import ExpereinceJob from './ExpereinceJob'
import ExperienceCenter from './ExperienceCenter'

ExpereinceJob
const ExperienceItemRight = ({ jobTitle, jobDescription, jobDate, jobCompany }) => {
  return (

    <div className='flex justify-between h-48'>
      <div className='w-1/3'></div>
      <ExperienceCenter />

      <ExpereinceJob jobTitle={jobTitle} jobDescription={jobDescription} jobDate={jobDate} jobCompany={jobCompany} />
    </div>
  )
}

export default ExperienceItemRight