import React from 'react'
import Lottie from 'lottie-react'
import Animation from './../../../lottie/cooking-ingredients.json'

const Loadingpan = () => {
  return (
    <div>
      <Lottie className='w-[500px] h-[400px]' animationData={Animation} loop={true} />
    </div>
  )
}

export default Loadingpan
