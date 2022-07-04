import React from 'react'
import "./output.css"
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Screens/Home'
import ViewRecipe from './Components/Screens/ViewRecipe'
import SearchRecipes from './Components/Screens/SearchRecipes'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="view:recipe" element={<ViewRecipe/>}></Route>
        <Route path="search:recipe" element={<SearchRecipes/>}></Route>
      </Routes>
    </div>
  )
}

export default App
