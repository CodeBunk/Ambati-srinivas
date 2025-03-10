import React, { useState } from "react";
import macbook from "../assets/Macbook.png";
import image from "../assets/IMG_20250106_231042282.jpg"
const HeroImage = (props: any) => {
  console.log(props)

  const [transform, setTransform] = useState("none");
  const [shadow, setShadow] = useState("shadow-lg");

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);

    const rotateX = y * 1;
    const rotateY = -x * 1;
    const translateZ = -5; // Slight elevation effect

    setTransform(`perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`);
    setShadow(" shadow-2xl ");
  };

  const handleMouseLeave = () => {
    setTransform("none");
    setShadow(" shadow-lg ");
  };


  return (
    <div className=" flex flex-col h-full  items-center  justify-around gap-5   md:p-10 p-4  pt-10    ">
      <div className="md:w-1/2 w-full cursor-pointer " style={{ transform, transformStyle: "preserve-3d" }}
      // onMouseMove={handleMouseMove}
      // onMouseLeave={handleMouseLeave}
      >

        {/* <img src={image} alt=" " className=" shadow shadow-xl w-full  h-auto transition-transform duration-200  object-cover rounded-xl  bg-black  overflow-hidden hover " /> */}
        <img src={props?.image} alt=" " className="w-full h-auto aspect-auto    selection-none shadow rounded-xl   object-cover transition-transform duration-300 ease-out"
          style={{ transform, transformStyle: "preserve-3d" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave} />
      </div>
      <div className=" w-full h-20 font-WhyteRegular  text-xl text-center">
        {/* we are working on making this space a better place to land
        <div className=" text-lg font-WhyteBold ">  - srinivas ambati</div> */}
        {props?.description}
      </div>
      <div className="w-1/2 h-8 bg-gray/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
          style={{ width: `${props.percentage}%` }}
        >
          <div className="h-full bg-pattern opacity-50"></div>
        </div>
        <div className=" absolute left-0 animate-pulse flex items-center justify-center text-black text-md font-bold text-center w-full    ">
          {props.percentage}% loading....
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
