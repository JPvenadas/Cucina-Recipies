import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

const ViewRecipe = () => {
  const location = useLocation()
  console.log(location)
  let {recipe} = useParams()
  return (
    <div>
    {recipe}
    </div>
  )
}

export default ViewRecipe
