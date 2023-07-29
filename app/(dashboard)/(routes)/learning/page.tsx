import Header from '@/components/Header'
import { learningPath } from '@/lib/constants'
import React from 'react'

const LearningPath = () => {
  return (
<div className="">
      <Header
        title={learningPath.label}
        icon={learningPath.icon}
        description={learningPath.description}
        iconColor={learningPath.color}
        bgColor={learningPath.bgColor}
      ></Header>
      <h1 className='font-bold text-2xl item-center h-full w-full justify-center text-center'> Coming soon...</h1>
      </div>  )
}

export default LearningPath