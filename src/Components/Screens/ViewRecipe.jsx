import React from 'react'
import { useParams } from 'react-router-dom'

const ViewRecipe = () => {
  let {recipe} = useParams()
  return (
    <div>
    {recipe}
    </div>
  )
}

export default ViewRecipe
