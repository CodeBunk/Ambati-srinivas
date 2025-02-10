import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useOutlet } from 'react-router-dom'


const BaseLayout = () => {
  const outlet = useOutlet()
  return (
    <div className='flex flex-col justify-between h-screen'>
      {/* <Navbar/> */}
      <div className='flex-grow h-full max-w-screen overflow-clip '>
        {outlet}
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default BaseLayout