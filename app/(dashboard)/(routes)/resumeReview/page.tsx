import Header from '@/components/Header'
import { resumeReview } from '@/lib/constants'
import React from 'react'

const ResumeReview = () => {
  return (
<div className="">
      <Header
        title={resumeReview.label}
        icon={resumeReview.icon}
        description={resumeReview.description}
        iconColor={resumeReview.color}
        bgColor={resumeReview.bgColor}
      ></Header>
      <h1 className='font-bold text-2xl item-center h-full w-full justify-center text-center'> Coming soon...</h1>
      </div>  )
}

export default ResumeReview