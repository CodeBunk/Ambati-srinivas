import React, { useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useLocation, useNavigate, useOutlet } from 'react-router-dom'
import trek from "@/assets/trek.png"

const BaseLayout = () => {
  const [Value, setValue] = useState(false)
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.clickable-area')) {
      setValue(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const outlet = useOutlet()
  const Location = useNavigate()
  const currentLocatin = useLocation()



  const HandleLocation = (props: any) => {
    props == currentLocatin?.pathname ? Location("/") : Location(props);
  };
  return (
    <div className='flex flex-col justify-between md:h-screen'>
      {/* <Navbar/> */}
      <div onMouseEnter={() => setValue(true)} onTouchMoveCapture={() => setValue(true)} onClick={() => setValue(true)} className={`   absolute bottom-4 right-4  z-40 flex items-center justify-center  hover:w-20 hover:h-20 w-10 h-10   transition-all duration-300 cursor-pointer  ${Value ? " max-md:w-20 max-md:h-20  " : "  "}  `}>
        <div onClick={() => { Value ? setValue(true) : console.log("not setting value") }} className={`" z-[50] border border-black/20 font-poppins relative rounded-full bg-white hover:scale-[105%] transition-all duration-300  w-10 h-10  flex items-center justify-center cursor-pointer  ${Value ? " scale-[70%] bg-red text-white " : " text-black"} "`}>
          {!Value ? "🕹️" : " X "}

        </div>
        <div aria-disabled={!Value} onClick={() => HandleLocation("/food")} className={` border border-black/20 absolute ${Value ? " bottom-20 right-2 opacity-100 " : " bottom-5 right-5 opacity-0  "} text-2xl    rounded-full bg-white hover:scale-[120%] transition-all duration-300 text-black w-10 h-10  flex items-center justify-center cursor-pointer `}>
          {currentLocatin?.pathname == "/food" ? `🏠` : ` 🍲`}
        </div>
        <div onClick={() => HandleLocation("/travel")} className={` border border-black/20 absolute  ${Value ? " bottom-2 right-[70px]  border-black   opacity-100 " : " bottom-5 right-5  opacity-0  "}  rounded-full bg-white hover:scale-[120%] transition-all duration-300 text-black w-10 h-10  flex items-center justify-center cursor-pointer `}>
          {currentLocatin?.pathname == "/travel" ? `🏠` : <img src={trek} alt="" className=" w-full h-full rounded-full p-1" />}
        </div>
        <div onClick={() => HandleLocation("/hobbies")} className={` border border-black/20 absolute ${Value ? " bottom-14 right-14   opacity-100 " : " bottom-5 right-5  opacity-0  "} text-xl   rounded-full bg-white hover:scale-[120%] transition-all duration-300 text-black w-10 h-10  flex items-center justify-center cursor-pointer `}>
          {currentLocatin?.pathname == "/hobbies" ? `🏠` : `❤️‍🔥`}
        </div>
      </div>
      <div className='flex-grow h-full max-w-screen overflow-clip '>
        {outlet}
      </div>

      {/* <Footer /> */}
    </div >
  )
}

export default BaseLayout