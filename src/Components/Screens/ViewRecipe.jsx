import React, {useEffect, useState} from 'react'
import { useParams, useLocation} from 'react-router-dom'

const ViewRecipe = () => {

  const {state} = useLocation()
  let {recipeParam} = useParams()
  recipeParam = recipeParam.replace(":", "")
  console.log(state)
  
  useEffect(()=>{
    
  }, [])
  return (
    <div>
  {JSON.stringify(state)}
    </div>
  )
}

export default ViewRecipe
