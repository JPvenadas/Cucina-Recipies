import React from 'react'
import RecItems from './RecItems'
import { useState, useEffect } from 'react'


const Recommendation = () => {
  
  const [recArray, SetRecArray] = useState([])

  const getRec = async()=>{
    const res = await fetch("https://random-data-api.com/api/food/random_food?size=40")
    const rec = await res.json()
    let dishArr = []
    await rec.map(recipe =>{
      dishArr.push(recipe.dish)
    })
    dishArr =  dishArr.filter((item, index) =>{
      return dishArr.indexOf(item) === index && item.length <= 15;
    })
    
    SetRecArray(dishArr)
    
  }
    useEffect(()=>{
      getRec()
    },[])
  return (
    <div className='flex flex-flow-1 justify-center'>
     {recArray? recArray.map(recipe =>(
        <RecItems key={recipe} text={recipe}/>
     )): ""}
    </div>
  )
}

export default Recommendation
