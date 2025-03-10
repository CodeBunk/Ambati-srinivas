import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useNavigate, useOutlet } from 'react-router-dom'


const OtherLayout = () => {
  const outlet = useOutlet()

  return (



    <div className='flex flex-col justify-between md:h-screen'>
      {/* <Navbar /> */}
      <div className='flex-grow h-full max-w-screen overflow-clip '>

        {outlet}
      </div>
      {/* <div className={`   absolute bottom-4 right-4  z-40 flex items-center justify-center  hover:w-20 hover:h-20 w-10 h-10   transition-all duration-300 cursor-pointer      `}>
        <div onClick={() => Location("/")} className={`" font-poppins relative rounded-full bg-black  hover:scale-[150%] transition-all duration-300  w-10 h-10  flex items-center justify-center cursor-pointer   "`}>
          🏠
        </div>
      </div> */}
      {/* <Footer /> */}
    </div>
    // </div >


  )
}

export default OtherLayout