import React from 'react'
import RecItems from './RecItems'
import { useState, useEffect } from 'react'


const Recommendation = () => {
  
  const [recArray, SetRecArray] = useState([])

  const getRec = async()=>{
    const res = await fetch("https://random-data-api.com/api/food/random_food?size=21")
    const rec = await res.json()
    SetRecArray(rec)
  }
    useEffect(()=>{
      getRec()
    },[])
  return (
    <div className='flex flex-flow-1 justify-center'>
     {recArray? recArray.map(recipe =>(
        <RecItems key={recipe.id} text={recipe.dish}/>
     )): ""}
    </div>
  )
}

export default Recommendation
