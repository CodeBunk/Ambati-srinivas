

import React from 'react'
import Redux from "@/assets/images/skills/Redux.png"
import Postman from "@/assets/images/skills/Postman.svg"
import AWS from "@/assets/images/skills/AWS.png"
import node from "@/assets/images/skills/node.png"
import Mongo from "@/assets/images/skills/mongo.png"

const SkillsPage = () => {
    return (
        <div className=' h-full w-full  '>

            <div className=' text-2xl font-Bold pb-6 '>
                Skills
            </div>



            <div className=' flex items-center overflow-scroll scrollbar-hide w-full   gap-10 '>
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" className=' aspect-square bg-black/50 p-2 h-24 w-24 rounded-xl ' alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" className=' aspect-square bg-black/50 p-2 h-24 w-24 rounded-xl ' alt="" />
                <img src={node} className=' aspect-square bg-black/50 p-2 h-24 w-24 rounded-xl ' alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" className=' aspect-square bg-black/50 p-2 h-24 w-24 rounded-xl ' alt="" />
                <img src={Mongo} className=' aspect-square bg-black/50 p-2 h-24 w-24 rounded-xl ' alt="" />
                <img src={Redux} className=' aspect-square bg-black/50 p-2 h-24 w-24 rounded-xl ' alt="" />
                <img src={Postman} className=' aspect-square bg-black/50 p-2 h-24 w-24 rounded-xl ' alt="" />
                <img src={AWS} className='  bg-black/50 p-2 h-auto py-auto w-24 rounded-xl ' alt="" />
            </div>

        </div>
    )
}

export default SkillsPage