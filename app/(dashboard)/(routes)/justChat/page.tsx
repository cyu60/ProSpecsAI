import Header from '@/components/Header'
import { justChat } from '@/lib/constants'
import React from 'react'

const JustChat = () => {
  return (
<div className="">
      <Header
        title={justChat.label}
        icon={justChat.icon}
        description={justChat.description}
        iconColor={justChat.color}
        bgColor={justChat.bgColor}
      ></Header>
      <h1 className='font-bold text-2xl item-center h-full w-full justify-center text-center'> Coming soon...</h1>
      </div>  )
}

export default JustChat