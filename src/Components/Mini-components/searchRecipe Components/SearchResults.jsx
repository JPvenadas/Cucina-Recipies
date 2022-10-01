import React from 'react'
import RecipeItem from './RecipeItem'
import Loadingpan from './Loadingpan'

const SearchResults = ({recipeList}) => {
  return (
    <div className='flex flex-flow-1 justify-center'>
       {recipeList.map(recipe=>(
        <RecipeItem recipe={recipe.recipe}/>
       ))}
    </div>
  )
}

export default SearchResults
