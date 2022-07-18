import React from 'react'
import chefpic from './../../Images/chef.png'

const Home = () => {
  return (
    <div className='absolute overflow-hidden top-0 left-0 w-screen h-screen bg-background bg-cover bg-center z-[1] flex justify-center'>
      <div className='w-[1000px] h-full flex px-[20px]'>
        <div className='flex-1 h-full flex flex-col justify-center'>
        
        </div>
        <div className='flex-1 h-full relative'>
          <img src={chefpic} alt="chef" 
          className='w-[780px] h-[520px] absolute max-w-[800px] bottom-[-10px] left-[-130px]'/>
        </div>
      </div>
    </div>
  )
}

export default Home
