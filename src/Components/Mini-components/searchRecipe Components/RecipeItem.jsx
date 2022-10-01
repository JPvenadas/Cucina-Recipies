import React from 'react'

const RecipeItem = () => {
  return (
    <div className='relative bg-white w-[420px] h-[175px] gap-[20px] p-[30px] flex m-[15px] rounded-[30px] shadow-[1px_1px_1px_1px_rgb(0,0,0,0.05)] hover:bg-lighten transition duration-700'>
      <div className='absolute text-center font-bold top-[-10px] font-inter text-[11px] text-white right-[0px] bg-primary rounded-[45px] w-[80px] h-[20px]'>
        mexican
      </div>
      <div className='flex justify-center items-center'>
        <img className='bg-primary w-[100px] h-[100px] rounded-[100%]' src="" alt="" />
      </div>
      <div className='w-[250px] flex flex-col gap-[5px] h-[100%]'>
        <p className='text--[50px] text-greenish h-[50px] font-bold'>Vegetable Salad</p>
        <div className='h-[.8px] w-full bg-primary'></div>
        <div className='flex font-poppins text-[12px] text-grayish font-semibold'>
            <div className='flex-1 flex flex-col gap-[5px]'>
                <p>Main Dish</p>
                <p><span className='text-greenish'>16</span> Ingredients</p>
            </div>
            <div className='flex-1 flex flex-col gap-[5px]'>
               <p>Lunch/Dinner</p>
               <p><span className='text-greenish'>1206</span> Calories</p>
            </div>
        </div>
        <div className='text-[11px] absolute bottom-[15px] right-[40px] text-greenish font-semibold text-right'>
            Click to view more 
        </div>
      </div>
    </div>
  )
}

export default RecipeItem