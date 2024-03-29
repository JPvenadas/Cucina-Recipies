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
  searchParam = searchParam.replace(":", "")
  let [recipeList, SetRecipeList] = useState({hits:[]}); // recipes coming from the fetch
  const [searchInput, setSearchInput] = useState(); // the value of the search input
  const [searchStatus, setSearchStatus] = useState("No search yet");// status of the search (Searching, Found, or not found)

  let navigate = useNavigate() // for navigation
  let container = useRef("")
  let notifheader = useRef("")
  let notifsub = useRef("")
  
  
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
    //set the recipes from the api to the recipelist state
    SetRecipeList(recipes)
    //update the status if the recipe exists
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
    if(searchParam!==""){
      setSearchStatus("Searching")
      getRecipe()
    }
    else{
    }
  },[navigate])
   
  useEffect(()=>{
    if(searchStatus == "Searching"){
      notifheader.current.innerHTML =`Searching`
      notifsub.current.innerHTML = `Loading results for ${searchParam}`
      container.current.style.background = "white"
    }
    else if(searchStatus == "No search yet"){
      notifheader.current.innerHTML =`Recommendations`
      notifsub.current.innerHTML = `Dont know what to cook?`
    }else{
      notifheader.current.innerHTML =`Search Results`
      notifsub.current.innerHTML = `Recipes for ${searchParam}`
      container.current.style.background = "transparent"
    }
  },[searchStatus])
  return (
    <div className='relative bg-tertiary flex justify-center min-h-full pt-[80px] 
    desktop:pt-[120px]'>
      <div className='w-[1000px] px-[20px] flex flex-col large-desktop:w-[1500px]'>
        <div className='flex flex-col-reverse gap-[30px] 
        desktop:flex-row desktop:justify-between w-full desktop:px-[30px] desktop:my-[20px] large-desktop:max-w-[1000px] self-center'>
          <div className='flex flex-col justify-center text-center 
          desktop:justify-start desktop:text-left'>
            <h2 ref={notifheader} className='font-poppins text-[26px] font-bold text-greenish'>Recommendations</h2>
            <p ref={notifsub} className='font-inter relative bottom-[5px] text-[15px] font-[600] text-grayish'>Dont know what to cook?</p>
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

        <div className='bg-white rounded-[50px] px-[30px] py-[50px]'
          ref={container}>
          {
            searchStatus === "No search yet" ?
            <Recommendation/>
              :
              searchStatus === "Searching" ?
                <div className='flex flex-flow-1 justify-center'>
                  <Loadingpan />
                </div>
                :
                searchStatus === "Not found" ?
                  <h1>No Recipes found</h1>
                  :
                 <SearchResults recipeList={recipeList.hits}/>
          }
        </div>
      </div>
      <Developer />
      <ScrollUpBtn/>
    </div>
  )
}

export default SearchRecipes
