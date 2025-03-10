import React from 'react'
import image from "@/assets/images/Food/food.png"
import HeroImage from '@/components/Heroimage'
const Food = () => {
    return (
        <div className=' w-full h-full bg-white p-10 '>
            <div className=' text-center  text-xl font-bold'>
                Food
            </div>
            <HeroImage percentage="50" image={image} description="  One cannot think well, love well, sleep well, if one has not dined well. - Virginia Woolf " />
        </div>
    )
}

export default Food