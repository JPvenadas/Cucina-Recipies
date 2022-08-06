import React from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'

const SearchRecipes = () => {
  let {searchParam} = useParams() // the parameter from the route
  let [recipeList, SetRecipeList] = useState({hits:[]}); // recipes coming from the fetch
  const [searchInput, setSearchInput] = useState(); // the value of the search input
  const [searchStatus, setSearchStatus] = useState("No search yet");// status of the search (Searching, Found, or not found)

  let navigate = useNavigate() // for navigation
  let container = useRef("")

  // function to get the list of recipes
  async function getRecipe(){
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '67389ce453mshf94102834b9b406p1b0d77jsn4ae265a687f9',
        'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
      }
    };
    
    let res = await fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=${searchParam}&to=30`, options)
    let recipes = await res.json()
    SetRecipeList(recipes)
      
    if(await recipes.hits.length > 0){
      setSearchStatus("Found")
    }else{
      setSearchStatus("Not found")
    }
  }

  function RecipeInfoNavigate(recipe){
  let regex = /recipe\w+/ig;
  let ID = recipe.uri.match(regex)
  navigate(`/view:${ID}`, {state: recipe})
  }
  
  // this will be triggered for every refresh or route change
  useEffect(()=>{
    if(searchParam!==":"){
      setSearchStatus("Searching")
      getRecipe()
    }
    else{
    }
  },[navigate])

  return (
    <div className='relative top-[100px]'>

      <input required placeholder='Search a Recipe' type="text" onChange={val => setSearchInput(val.target.value)} />
      <button onClick={() => {
        //Navigate to /Search:{and the recipe you wanted search for}
        //after navigating the useeffect will be executed and thus searching the recipe
        navigate(`/Search:${searchInput}`)
      }}>
        Search
      </button>
      <div ref={container}>
        {
        searchStatus === "No search yet"?
          <h1>Search now</h1>
        :
        searchStatus === "Searching"?
          <h1>Searching</h1>
        : 
        searchStatus === "Not found"?
          <h1>No Recipes found</h1>
        : 
        recipeList.hits.map(foods => (
          <div key={foods.recipe.uri} onClick={()=>{RecipeInfoNavigate(foods.recipe)}}>
            <h1 className='text-red-200 underline font-xl'>{foods.recipe.label}</h1>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default SearchRecipes
