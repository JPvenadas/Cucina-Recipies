import React from 'react'
import { useRef } from 'react'

const ScrollUpBtn = () => {
    let btn = useRef(null)
    window.addEventListener("scroll", setDisplay)

    function setDisplay(){
        btn.current.classList.toggle("shown", window.scrollY > 0)
    }
  return (
    <button className='hidden bg-up w-[40px] h-[40px] rounded-[100%] bg-[length:100%_100%] fixed right-[2vw] bottom-[5vh]'
    ref={btn} onClick={()=>{
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
    }}>
      
    </button>
  )
}

export default ScrollUpBtn
