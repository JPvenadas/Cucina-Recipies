import React from 'react'
import chefpic from './../../../Images/chef.png'

const BackgroundImage = () => {
  return (
    <div className='relative h-auto flex justify-center items-center
    desktop:h-full desktop:flex-1 desktop:min-h-[550px]'>
          <img src={chefpic} alt="chef" 
          className=' w-[400px] h-[365px]
          tablet:w-[500px] tablet:h-[467px]
          desktop:w-[700px] desktop:h-[650px] desktop:absolute max-w-[800px] desktop:bottom-[-150px] desktop:left-[-80px]'/>
    </div>
  )
}

export default BackgroundImage
