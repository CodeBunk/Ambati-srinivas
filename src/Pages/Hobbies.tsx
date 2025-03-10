import React from 'react'
import image from "@/assets/IMG_20250106_231042282.jpg"
import HeroImage from '@/components/Heroimage'
const Hobbies = () => {
    return (
        <div className=' w-full h-full bg-white p-10 '>
            <div className=' text-center  text-xl font-bold'>
                Hobbies
            </div>
            <HeroImage percentage="40" image={image} description=" Actively working on building my life one hobby at a time " />
        </div>
    )
}

export default Hobbies