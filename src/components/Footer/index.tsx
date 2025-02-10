import React from "react";
import LOGO from "../../assets/.png";
import Icons from "../Icons";

const Footer = () => {
  return (
    <>
      <div className="grid gap-5 bg-black ">
        {/* <div className="flex flex-col items-center justify-between px-10 py-10 text-white border-b border-white  md:flex-row lg:px-20">
          <img src={LOGO} alt="" /> 

          <div className="flex gap-10 ">
            <div className="flex flex-col mt-px max-md:mt-12">
              <a href="..." className="text-xs text-white text-opacity-70">
                Product
              </a>
              <a href="..." className="mt-8 text-lg tracking-normal text-white">
                Features
              </a>
              <a href="..." className="text-lg tracking-normal text-white mt-7">
                Benefits
              </a>
              <a
                href="..."
                className="text-base tracking-normal text-white mt-7"
              >
                Try Now
              </a>
            </div>
            <div className="flex flex-col mt-px max-md:mt-12">
              <a href="..." className="text-xs text-white text-opacity-70">
                Explore
              </a>
              <a
                href="..."
                className="mt-8 text-base tracking-normal text-white"
              >
                Events
              </a>
              <a href="..." className="text-lg tracking-normal text-white mt-7">
                Blog
              </a>
            </div>
            <div className="flex flex-col max-md:mt-12">
              <a href="..." className="text-xs text-white text-opacity-70">
                Company
              </a>
              <a href="..." className="mt-8 text-lg tracking-normal text-white">
                About us
              </a>
              <a
                href="..."
                className="text-base tracking-normal text-white mt-7"
              >
                Contact us
              </a>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col items-center justify-between w-full p-10 text-white md:flex-row max-md:gap-10 ">
          <div className="flex flex-col gap-2  md:gap-10 md:flex-row max-md:text-center">
            <div>© 2025 All right reserved.</div>
            {/* <div>Privacy Policy</div>
            <div>Terms of Service</div> */}
          </div>

          <div className="flex items-center justify-center gap-4 ">
            {/* <Icons variant="Youtube" Link="https://www.youtube.com" /> */}
            <Icons variant="Instagram" Link="https://www.instagram.com/siva_srinivas23/" />
            {/* <Icons variant="Youtube" Link="https://www.youtube.com" /> */}
            <Icons variant="Twitter" Link="https://x.com/sivasrinivas_23" />
            <Icons variant="LinkedIn" Link="https://www.linkedin.com/in/srinivasambati" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
