import React from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'

const SearchRecipes = () => {
  let {recipe} = useParams() // the parameter from the route
  let [recipeList, SetRecipeList] = useState({hits:[]}); // recipes coming from the fetch
  const [Search, SetSearch] = useState(); // the value of the search input
  let navigate = useNavigate() // for navigation
  let container = useRef("")

  // function to get the list of recipes
  async function getRecipe(){
    const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${recipe}&app_id=4cde7fc0&app_key=ca33af6f38fbc21a10adf792542ea0be%09`)
    const recipes = await res.json()
    SetRecipeList(await recipes)
  }
  
  // this will be triggered for every refresh or route change
  useEffect(()=>{
    if(recipe!==":"){
      getRecipe()
    }
  },[navigate])

  return (
    <div>
      <input placeholder='Search a Recipe' type="text" onChange={val => SetSearch(val.target.value)} />
      <button onClick={() => {
 
        //Navigate to /Search:{and the recipe you wanted search for}
        //after navigating the useeffect will be executed and thus searching the recipe
        navigate(`/Search:${Search}`)
      }}>
        Search
      </button>
      <div ref={container}>
        {
          recipe !== ":"?
            //if there is recipe search in the route
            recipeList && recipeList.hits.map(foods => (
              <div key={foods.recipe.uri}>
                <h1>{JSON.stringify(foods.recipe.label)}</h1>
              </div>
            ))
            :
            //if there is none
            <h1>Search now</h1>
        }
      </div>
    </div>
  )
}

export default SearchRecipes
