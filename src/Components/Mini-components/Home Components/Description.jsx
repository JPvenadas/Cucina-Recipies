import React from 'react'
import { Link } from 'react-router-dom'
import powericon from './../../../Images/power.png'
import pan from './../../../Images/pan.png'
import pin from './../../../Images/pin.png'

const Description = () => {
  return (
      <div className='flex-1 relative bottom-[-20px] h-full flex flex-col justify-center gap-[15px]'>
          <div className='flex items-center gap-[10px]'>
              <img src={powericon} alt="Power" />
              <p className='uppercase text-[16px] font-inter font-semibold text-grayish'>Powered by edamam recipes api</p>
          </div>
          <h2 className='text-[50px] w-[470px] font-bold text-grayish leading-[60px] pb-[15px]'>
              Find
              <span className='text-greenish'> Food Recipes </span>
              that suit your
              <span className='text-primary'> taste buds</span>
          </h2>
          <h3 className='w-[330px] text-[16px] leading-[24px] text-grayish font-[600] pb-[15px]'>
              Search for over 2 million foods that you can cook at the comfort of your homes
          </h3>
          <img className='absolute top-[100px] float1 left-[-90px]' src={pin} alt="" />
          <img className='absolute bottom-[60px] float2 right-[-15px] z-[2]' src={pan} alt="" />
          <div>
              <Link to='/search:'
                  className='text-white shadow-md font-[700] font-inter text-[14px] bg-primary rounded-[66px] px-[35px] py-[10px]'>
                  Get started
              </Link>
          </div>
      </div>
  )
}

export default Description
