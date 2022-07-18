import { useRef, useState } from "react"

const Navbar = () => {
 
  let navbar = useRef(null)
  let navbarContainer = useRef(null)
  const [navbarOpen, setNavbarOpen] = useState(true)
  
  window.addEventListener("scroll", setSticky)

  function setSticky(){
    navbarContainer.current.classList.toggle("sticky", window.scrollY > 0)
  }
  function openMenu(){
    setNavbarOpen(!navbarOpen)
    if(navbarOpen){
      navbarContainer.current.classList.remove("h-[60px]")
      navbarContainer.current.classList.add("sticky")
    }else{
      navbarContainer.current.classList.add("h-[60px]")
      navbarContainer.current.classList.remove("sticky")
    }
  }

  return (
    //main container
    <div ref={navbarContainer} className='w-full relative z-[2] h-[60px] justify-center overflow-hidden flex bg-transparent 
    desktop:h-[110px] transition-all duration-1000'>
      <div ref={navbar} 
      className='w-[1000px] px-[20px] 
      desktop:flex desktop:gap-[40px] '>
        <div 
        className='flex flex-row items-center h-[60px] justify-between
        desktop:h-full'>
          <div 
          className=''>
            <h1 
            className='text-primary text-[25px] desktop:text-[30px] font-berkshire'>
              Cucina
            </h1>
          </div>
          <div>
            <button 
            // this is what happens when the button is clicked
            onClick={openMenu} className='w-[30px] rounded-[5px] h-[30px] bg-menu bg-[length:100%_100%] 
            desktop:hidden'></button>
          </div>
        </div>
        <nav 
        className='font-semibold text-grayish py-[20px] flex flex-col
        desktop:flex-row flex-1'>
          <ul 
          className='w-full flex flex-col gap-[20px] pb-[20px]
          desktop:flex-row desktop:items-center desktop:justify-center desktop:gap-[80px] desktop:pb-[0]'>
            <a href=""><li>Recipes</li></a>
            <a href=""><li>About</li></a>
            <a href=""><li>Information</li></a>
          </ul>
          <div 
          className='w-full flex justify-start items-center
          desktop:w-auto'>
            <button className='bg-white flex justify-center items-center px-[20px] py-[5px] rounded-[15px]'>
            <div className='w-[40px] h-[34px] bg-star'></div>
            <p className='font-bold text-primary inline-block whitespace-nowrap'>Star on Github</p>
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
