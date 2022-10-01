import React from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import Developer from '../Mini-components/Home Components/Developer'
import Recommendation from '../Mini-components/searchRecipe Components/Recommendation'
import Loadingpan from '../Mini-components/searchRecipe Components/Loadingpan'
import ScrollUpBtn from '../Mini-components/searchRecipe Components/ScrollUpBtn'
import SearchResults from '../Mini-components/searchRecipe Components/SearchResults'

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
    <div className='relative bg-tertiary flex justify-center pt-[80px] 
    desktop:pt-[120px]'>
      <div className='w-[1000px] px-[20px]'>
        <div className='flex flex-col-reverse gap-[30px] 
        desktop:flex-row desktop:justify-between desktop:px-[30px] desktop:my-[20px]'>
          <div className='flex flex-col justify-center text-center 
          desktop:justify-start desktop:text-left'>
            <h2 className='font-poppins text-[26px] font-bold text-greenish'>Recommendations</h2>
            <p className='font-inter relative bottom-[5px] text-[15px] font-[600] text-grayish'>Dont know what to cook?</p>
          </div>

          <div className='flex justify-center'>
            <div className='flex w-[350px] h-[40px] rounded-[15px] overflow-hidden shadow-md desktop:w-[400px]'>
              <input className=' w-[calc(100%-53px)] px-[20px] text-[14px]' required placeholder='Search a Recipe' type="text" onChange={val => setSearchInput(val.target.value)} />
              <button className='bg-search w-[53px] bg-[length:100%_100%]' onClick={() => {
                //Navigate to /Search:{and the recipe you wanted search for}
                //after navigating the useeffect will be executed and thus searching the recipe
                navigate(`/Search:${searchInput}`)
              }}>

              </button>
            </div>
          </div>
        </div>

        <div className='bg-transparent rounded-[50px] px-[30px] py-[50px]'
          ref={container}>
          {
            searchStatus === "No search yet" ?
            <SearchResults/>
              :
              searchStatus === "Searching" ?
                <div className='flex flex-flow-1 justify-center'>
                  <Loadingpan />
                </div>
                :
                searchStatus === "Not found" ?
                  <h1>No Recipes found</h1>
                  :
                  recipeList.hits.map(foods => (
                    <div key={foods.recipe.uri} onClick={() => { RecipeInfoNavigate(foods.recipe) }}>
                      <h1 className='text-red-200 underline font-xl'>{foods.recipe.label}</h1>
                    </div>
                  ))
          }
        </div>
      </div>
      <Developer />
      <ScrollUpBtn/>
    </div>
  )
}

export default SearchRecipes
