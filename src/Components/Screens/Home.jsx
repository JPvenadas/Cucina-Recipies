import React from 'react'
import chefpic from './../../Images/chef.png'
import powericon from './../../Images/power.png'
import pan from './../../Images/pan.png'
import pin from './../../Images/pin.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='absolute overflow-hidden top-0 left-0 w-screen h-screen bg-background bg-cover bg-center z-[1] flex justify-center'>
      <div className='w-[1000px] h-full max-h-[700px] flex px-[20px]'>
        {/* left */}
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
        {/* Right */}
        <div className='flex-1 h-full min-h-[550px] relative'>
          <img src={chefpic} alt="chef" 
          className='w-[650px] h-[600px] absolute max-w-[800px] bottom-[-150px] left-[-60px]'/>
        </div>
      </div>
    </div>
  )
}

export default Home
