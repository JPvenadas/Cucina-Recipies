import React from 'react'
import RecItems from './RecItems'
import { useState, useEffect } from 'react'
import Loadingpan from './Loadingpan'

const Recommendation = () => {
  
  const [recArray, setRecArray] = useState([])
  const [status, setStatus] = useState("searching")

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
    setStatus("Fetched")
    setRecArray(dishArr)
  }
    useEffect(()=>{
      getRec()
    },[])
  return (
    <div className='flex flex-flow-1 justify-center'>
     {status == "Fetched"? recArray.map(recipe =>(
        <RecItems key={recipe} text={recipe}/>
     )): <Loadingpan/>}
      
    </div>
  )
}

export default Recommendation
