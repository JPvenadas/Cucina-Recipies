import React from 'react'
import SocialIcons from './SocialIcons'
import Github from './../../../Images/github.png'
import Linkedin from './../../../Images/linkedin.png'
import Discord from './../../../Images/discord.png'

const Developer = () => {
  return (
    <div className='fixed left-[0vw] bottom-[0vh] h-[60vh] w-[50px] flex-nowrap flex justify-end items-center'>
      <div className=' flex shrink-0 flex-row rotate-[-90deg] relative left-[150px] gap-[15px]'>
        <div>
          Created by 
          <a href="" className='text-primary'> Jp Venadas</a>
        </div>
        <div className='flex justify-center items-center'>
          <div className='h-[2px] w-[40px] bg-primary'></div>
        </div>
        <div className='flex shrink-0 justify-center items-center'>
          <ul className='flex gap-[15px]'>
            <SocialIcons image={Discord}/>
            <SocialIcons image={Github}/>
            <SocialIcons image={Linkedin}/>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Developer
