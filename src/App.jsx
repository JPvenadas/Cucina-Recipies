import React from 'react'
import "./output.css"
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Screens/Home'
import ViewRecipe from './Components/Screens/ViewRecipe'
import SearchRecipes from './Components/Screens/SearchRecipes'
import Errorpage from './Components/Screens/Mini-components/404'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/view:recipeParam" element={<ViewRecipe/>}></Route>
        <Route path="/search:searchParam" element={<SearchRecipes/>}></Route>
        <Route path="*" element={<Errorpage/>}></Route>
      </Routes>
    </div>
  )
}

export default App
