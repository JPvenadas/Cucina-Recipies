import React from 'react'

const RecipeItem = ({recipe}) => {
  return (
    <div className='relative bg-white w-[420px] h-[200px] gap-[20px] p-[30px] pt-[15px] flex m-[15px] rounded-[30px] shadow-md hover:bg-lighten transition duration-700'>
      <div className='absolute flex justify-center items-center font-semibold top-[-10px] font-inter text-[11px] text-white right-[0px] bg-primary rounded-[45px] px-[20px] py-[5px]'>
        <p>{recipe.cuisineType[0]}</p>
      </div>
      <div className='flex justify-center items-center'>
        <img className='w-[100px] h-[100px] rounded-[100%]' src={recipe.image} alt="" />
      </div>
      <div className='w-[250px] flex flex-col gap-[5px] h-[100%]'>
        <div className='text--[50px] flex items-center text-greenish h-[75px] font-bold'>
        <p>{recipe.label}</p>
        </div>
        <div className='h-[.8px] w-full bg-primary'></div>
        <div className='flex font-poppins text-[12px] text-grayish'>
            <div className='flex-1 flex flex-col gap-[5px]'>
                <p>{recipe.dishType}</p>
                <p><span className='text-greenish font-bold'>{recipe.ingredients.length}</span> Ingredients</p>
            </div>
            <div className='flex-1 flex flex-col gap-[5px]'>
               <p>{recipe.mealType}</p>
               <p><span className='text-greenish font-bold'>{Math.round(recipe.calories)}</span> Calories</p>
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