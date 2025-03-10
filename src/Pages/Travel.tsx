import React from 'react'
import image from "@/assets/images/Travel/Travel.png"
import HeroImage from '@/components/Heroimage'
const Travel = () => {
    return (
        <div className=' w-full h-screen bg-white p-10 '>
            <div className=' text-center  text-xl font-bold'>
                Travel stories
            </div>
            <HeroImage percentage="10" image={image} description="Go see the world You'll never regret it - The Namesake (2006) " />
        </div>
    )
}

export default Travel