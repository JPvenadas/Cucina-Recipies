import React from 'react'

const SocialIcons = ({image, link}) => {
  return (
   <li>
    <a href={link}>
      <img src={image} alt="" className='h-[22px] w-[22px] rotate-[90deg]' />
    </a>
   </li>
  )
}

export default SocialIcons
