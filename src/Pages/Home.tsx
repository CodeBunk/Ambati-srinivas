import React, { useState } from "react";
import HeroImage from "../components/Heroimage";
import Hero from "../components/Hero";
import trek from "@/assets/trek.png"
import { useLocation, useNavigate } from "react-router";
import { log } from "console";
const Home = () => {

  // const [Value, setValue] = useState(false)
  // const handleClickOutside = (event: MouseEvent) => {
  //   const target = event.target as HTMLElement;
  //   if (!target.closest('.clickable-area')) {
  //     setValue(false);
  //   }
  // };

  // React.useEffect(() => {
  //   document.addEventListener('click', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('click', handleClickOutside);
  //   };
  // }, []);

  // const Location = useNavigate()
  // const currentLocatin = useLocation()

  // console.log(currentLocatin?.pathname, "loaction")
  return (
    <>
      {/* <div onMouseEnter={() => setValue(true)} onClick={() => setValue(true)} className={`   absolute bottom-4 right-4  z-40 flex items-center justify-center  hover:w-20 hover:h-20 w-10 h-10   transition-all duration-300 cursor-pointer  ${Value ? " w-20 h-20  " : "  "}  `}>
        <div onClick={() => { Value ? setValue(true) : "" }} className={`" font-poppins relative rounded-full bg-white hover:scale-[105%] transition-all duration-300  w-10 h-10  flex items-center justify-center cursor-pointer  ${Value ? " scale-[70%] bg-red text-white " : " text-black"} "`}>
          {!Value ? "🕹️" : " X "}

        </div>
        <div onClick={() => Location("/food")} className={` absolute ${Value ? " bottom-20 right-2 opacity-100 " : " bottom-5 right-5 opacity-0  "} text-2xl    rounded-full bg-white hover:scale-[120%] transition-all duration-300 text-black w-10 h-10  flex items-center justify-center cursor-pointer `}>
          🍲
        </div>
        <div onClick={() => Location("/travel")} className={` absolute ${Value ? " bottom-2 right-[70px]  border-black   opacity-100 " : " bottom-5 right-5  opacity-0  "}  rounded-full bg-white hover:scale-[120%] transition-all duration-300 text-black w-10 h-10  flex items-center justify-center cursor-pointer `}>
          <img src={trek} alt="" className=" w-full h-full rounded-full p-1" />
        </div>
        <div onClick={() => Location("/hobbies")} className={` absolute ${Value ? " bottom-14 right-14   opacity-100 " : " bottom-5 right-5  opacity-0  "} text-xl   rounded-full bg-white hover:scale-[120%] transition-all duration-300 text-black w-10 h-10  flex items-center justify-center cursor-pointer `}>
          ❤️‍🔥
        </div> */}
      {/* <div className="  rounded-full bg-white text-black w-10 h-10  flex items-center justify-center cursor-pointer  ">
          Z
        </div>
        <div className="  rounded-full bg-white text-black w-10 h-10  flex items-center justify-center cursor-pointer  ">
          thanks
        </div> */}



      {/* </div > */}
      {/* <HeroImage /> */}
      < Hero />


    </>
  );
};

export default Home;
