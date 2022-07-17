import { useRef, useState } from "react"

const Navbar = () => {
 
  let navbar = useRef(null)
  let navbarContainer = useRef(null)
  const [navbarOpen, setNavbarOpen] = useState(true)
  
  window.addEventListener("scroll", setSticky)
  function setSticky(){
    navbarContainer.current.classList.toggle("sticky", window.scrollY > 0)
  }

  return (
    //main container
    <div ref={navbarContainer} className='w-full justify-center flex bg-transparent 
    desktop:h-[100px] transition-all duration-1000'>
      <div ref={navbar} 
      className='w-[1200px] overflow-hidden h-[60px] px-[20px] 
      desktop:flex desktop:gap-[40px] desktop:h-full'>
        <div 
        className='flex flex-row h-[60px] items-center justify-between
        desktop:h-full'>
          <div 
          className=''>
            <h1 
            className='text-primary text-[25px] font-berkshire'>
              Cucina
            </h1>
          </div>
          <div>
            <button 
            // this is what happens when the button is clicked
            onClick={()=>{
              setNavbarOpen(!navbarOpen)
              navbarOpen? navbar.current.classList.remove("h-[60px]")
              : navbar.current.classList.add("h-[60px]")
            }} className='w-[30px] rounded-[5px] h-[30px] bg-menu bg-[length:100%_100%] 
            desktop:hidden'></button>
          </div>
        </div>
        <nav 
        className=' font-bold text-primary py-[20px] flex flex-col
        desktop:flex-row flex-1'>
          <ul 
          className='w-full flex flex-col gap-[20px] pb-[20px]
          desktop:flex-row desktop:items-center desktop:justify-center desktop:gap-[50px] desktop:pb-[0]'>
            <a href=""><li>Recipes</li></a>
            <a href=""><li>About</li></a>
            <a href=""><li>Information</li></a>
          </ul>
          <div 
          className='w-full flex justify-start items-center
          desktop:w-auto'>
            <button className='bg-white flex justify-center items-center px-[20px] py-[5px] rounded-[15px]'>
            <div className='w-[40px] h-[34px] bg-star'></div>
            <p className='inline-block whitespace-nowrap'>Star on Github</p>
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
