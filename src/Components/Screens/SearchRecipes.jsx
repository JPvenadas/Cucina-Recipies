import React from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const SearchRecipes = () => {
  let {recipe} = useParams()
  let [recipeList, SetRecipeList] = useState({hits:[]});
  const [Search, SetSearch] = useState();
  let navigate = useNavigate()

  async function getRecipe(){
    const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${recipe}&app_id=4cde7fc0&app_key=ca33af6f38fbc21a10adf792542ea0be%09`)
    const recipes = await res.json()
    SetRecipeList(await recipes)
  }

  useEffect(()=>{
    if(recipe===":"){

    }else{
     getRecipe()
    }
  },[navigate])

  return (
  <div>
    <input placeholder='Search a Recipe' type="text" onChange={val=> SetSearch(val.target.value)}/>
    <button onClick={()=>{
      navigate(`/Search:${Search}`)
    }}>
      Search
    </button>
    <h1>{Search}</h1>
    {recipeList && recipeList.hits.map(foods => (
      <div key={foods.recipe.uri}>
       <h1>{JSON.stringify(foods.recipe.label)}</h1>
      </div>
    ))}
  </div>
  )
}

export default SearchRecipes
