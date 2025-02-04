import React from "react";
import macbook from "../assets/Macbook.png";
import image from "../assets/IMG_20250106_231042282.jpg"
const Hero = () => {
  return (
    <div className=" flex flex-col  items-center  justify-around gap-10  p-10   ">
      <img src={image} alt=" " className=" w-1/2 h-auto   object-cover rounded-xl  bg-black  overflow-hidden hover " />
      <div className=" w-full h-20 font-WhyteRegular  text-xl text-center">
        we are working on making this site a better place to land
        <div className=" text-lg font-WhyteBold ">  - srinivas ambati</div>
      </div>
    </div>
  );
};

export default Hero;
