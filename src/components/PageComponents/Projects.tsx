import React from 'react'
import Trinity from "@/assets/images/Projects/trinity.png"
import Sabu from "@/assets/images/Projects/sabu.png"
import Travana from "@/assets/images/Projects/travana.png"
import UnitsDB from "@/assets/images/Projects/unitsdb.png"
import RCTS from "@/assets/images/Projects/RCTS.png"
import Offbeat from "@/assets/images/Projects/Offbeat.png"
import Bae from "@/assets/images/Projects/bae copy.png"
import Leafcode from "@/assets/images/Projects/leafcode copy.png"
import { useNavigate } from 'react-router'
import { Divide, Target } from 'lucide-react'
const Projects = () => {
    const ProjectData = [
        {
            title: "Trinity-XR",
            Image: Trinity,
            date: "",
            link: "https://trinityxr.in",
            description: " ",
            Tags: ["Dev", "Design", "Deployment", "VR-AR"],

        },
        {
            title: "Sabu Cyril",
            Image: Sabu,
            date: "",
            link: "https://sabu-cyril.vercel.app/",
            description: " ",
            Tags: ["Design", "Dev", "Deployment"],

        },
        {
            title: "LeafCode",
            Image: Leafcode,
            date: "",
            // link: "https://travana.io/",
            description: " ",
            Tags: ["Product", "Dev", "AI Developer", "Design", "Product management"],

        },
        {
            title: "Bae Furnishings ",
            Image: Bae,
            date: "",
            // link: "https://travana.io/",
            description: " ",
            Tags: ["Dev", "Deployment", "Design"],

        },
        {
            title: "OffBeatCompass",
            Image: Offbeat,
            date: "",
            // link: "https://travana.io/",
            description: " ",
            Tags: ["CRM", "Design", "SalesTool", "Dev", "Deployment", "Ecommerce"],

        },
        {
            title: "UnitsDB ",
            Image: UnitsDB,
            date: "",
            // link: "https://travana.io/",
            description: " ",
            Tags: ["Product", "Full Stack Application", "Dev", "Design"],

        },
        // {
        //     title: "RCTS- IIITH ",
        //     Image: RCTS,
        //     date: "",
        //     // link: "https://travana.io/",
        //     description: " ",
        //     Tags: ["JSON", "Dynamic Page", "Dev", "Atomic Design"],

        // },
        {
            title: "Travana ",
            Image: Travana,
            date: "",
            link: "https://travana.io/",
            description: " ",
            Tags: ["Dev", "Deployment"],

        },

    ]
    const Location = useNavigate()
    return (
        <div className=' h-full w-full  py-8  '>
            <div className=' text-2xl font-Bold pb-6 '>
                Projects
            </div>
            <div className=' w-full grid md:grid-cols-3 gap-5  grid-cols-2 text-white *: '>
                {ProjectData.map((data: any) =>

                    <div onClick={() => data?.link ? window.open(data?.link, "_blank") : ""} className='  bg-black/20 w-full h-full rounded-t-xl  rounded-b-xl    hover:scale-[102%] transition-all  duration-500 hover:shadow-xl '>
                        <div>
                            <img src={data?.Image ? data?.Image : "https://dummyimage.com/800x400/000/fff"} className='  rounded-xl aspect-video w-full h-full ' alt="" />
                        </div>
                        <div className=' p-4 pt-2 '>
                            {data?.title}
                            <div className=' flex flex-row-dense flex-wrap gap-1 '>
                                {data?.Tags.map((tag: string) => <div className=" rounded-sm px-1  text-nowrap bg-white/20 text-[10px] w-auto "> {tag}</div>)}
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
        </div >

    )
}

export default Projects