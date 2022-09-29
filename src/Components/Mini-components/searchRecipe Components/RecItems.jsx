import React from 'react'
import { useNavigate } from 'react-router-dom'

const RecItems = ({text}) => {
  let navigate = useNavigate()
  return (
    <button className='w-[260px] h-[45px] rounded-[15px] bg-recbuttoncolor shadow-[0px_3px_3px_1px_rgba(0,0,0,.25)] mx-[10px] my-[13px] text-white text-[15px] font-inter'
    onClick={()=>{
      navigate(`/Search:${text}`)
    }}>
      {text}
    </button>
  )
}

export default RecItems
