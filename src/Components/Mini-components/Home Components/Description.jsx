import React from 'react'
import { Link } from 'react-router-dom'
import powericon from './../../../Images/power.png'
import pan from './../../../Images/pan.png'
import pin from './../../../Images/pin.png'

const Description = () => {
  return (
      <div className='text-center relative mt-[20vh] flex flex-col justify-center items-center gap-[8px] 
      tablet:gap-[25px] tablet:mt-[15vh] 
      desktop:text-left desktop:mt-0 desktop:items-start desktop:h-full desktop:gap-[15px]'>
          <div className='flex justify-center items-center gap-[10px] desktop:justify-start'>
              <img className='bg-[lenght:100%] w-[20px] h-[20px] desktop:w-[30px] desktop:h-[30px]' src={powericon} alt="Power" />
              <p className='text-[13px] uppercase font-inter font-semibold text-grayish desktop:text-[16px]'>Powered by edamam recipes api</p>
          </div>
          <h2 className='text-[30px] w-[280px] leading-[35px] font-bold text-grayish  tablet:scale-[1.4]
          desktop:pb-[15px] desktop:text-[50px] desktop:leading-[60px] desktop:w-[470px] desktop:scale-100'>
              Find
              <span className='text-greenish'> Food Recipes </span>
              that suit your
              <span className='text-primary'> taste buds</span>
          </h2>
          <h3 className='w-[200px] text-[10px] leading-[16px] text-grayish font-[600]  pb-[15px]
         tablet:text-[13px] tablet:w-[265px] desktop:w-[330px] desktop:text-[16px] desktop:leading-[24px]'>
              Search for over 2 million foods that you can cook at the comfort of your homes
          </h3>
          <img className='hidden absolute top-[100px] float1 left-[-90px] desktop:inline-block' src={pin} alt="" />
          <img className='hidden absolute bottom-[60px] float2 right-[-15px] z-[2] desktop:inline-block' src={pan} alt="" />
          <div>
              <Link to='/search:'
                  className='text-white shadow-[5px_5px_10px_2px_rgb(0,0,0,0.2)] font-[700] font-inter text-[14px] bg-primary rounded-[66px] px-[45px] py-[12px]'>
                  Get started
              </Link>
          </div>
      </div>
  )
}

export default Description
