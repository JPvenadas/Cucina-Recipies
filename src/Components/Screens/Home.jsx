import React from 'react'
import BackgroundImage from '../Mini-components/Home Components/BackgroundImage'
import Developer from '../Mini-components/Home Components/Developer'
import Description from '../Mini-components/Home Components/Description'

const Home = () => {
  return (
    <div className='absolute overflow-hidden top-0 left-0 w-screen h-screen bg-background bg-cover bg-center z-[1] flex justify-center'>
      <div className='flex-col w-[1000px] desktop:flex-row h-full max-h-[700px] flex px-[20px]'>
        {/* left side of the flexbox */}
        <Description/>
        {/* right side of the flexbox*/}
        <BackgroundImage/>
      </div>
      {/* absolute positioned component */}
      <Developer/>
    </div>
  )
}

export default Home
