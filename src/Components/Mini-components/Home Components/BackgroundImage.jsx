import React from 'react'
import chefpic from './../../../Images/chef.png'

const BackgroundImage = () => {
  return (
    <div className='flex-1 h-full min-h-[550px] relative'>
          <img src={chefpic} alt="chef" 
          className='w-[700px] h-[650px] absolute max-w-[800px] bottom-[-150px] left-[-80px]'/>
    </div>
  )
}

export default BackgroundImage
