import React, { useState } from 'react'
import About from './PageComponents/About'
import Projects from './PageComponents/Projects'
import SkillsPage from './PageComponents/SkillsPage'

const MainContent = () => {
    const Data = [
        { name: "About", link: "about", component: <About /> },
        { name: "Projects", link: "projects", component: <Projects /> },
        { name: "Skills", link: "stack", component: <SkillsPage /> }
    ]
    const [Page, setPage] = useState(Data[0])
    const handleContent = (prop: any) => {
        setPage(prop);
        const element = document.getElementById(prop.link);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className=' relative w-full h-full px-4 md:pb-4 overflow-hidden  scrollbar  '>
            <div className='relative grid  h-10 md:grid-cols-3 grid-cols-5  bg-transparent overflow-scroll scrollbar-hide'>
                <div className='absolute top-0 z-0 w-full bg-black h-1/2 rounded-t-xl'>
                </div>
                <div className='z-20 bg-white/10 h-1/2 rounded-t-xl' />
                <div className='z-20 flex    items-center justify-around gap-2 pt-2 text-sm font- bg-black w-full rounded-xl max-md:col-span-3' >
                    {Data?.map((data: any) =>
                        <div className={` relative cursor-pointer   hover:text-white ${Page?.link == data?.link ? " text-white " : " text-white/50 "} `}
                            onClick={() => handleContent(data)}>
                            {data?.name}

                        </div>
                    )}
                </div>
                <div className='z-20 bg-white/10 h-1/2 rounded-t-xl' />
            </div>
            <div className=' z-10 absolute top-0  h-full md:h-[calc(100%-40px)] overflow-hidden p-4  '>
                <div className='h-full overflow-scroll scrollbar-hide'>
                    {Data.map((data: any, index: number) => (
                        <div
                            key={index}
                            id={data.link}
                            className={`relative cursor-pointer hover:text-white ${Page?.link === data?.link ? "text-white" : ""}`}
                            onMouseEnter={() => setPage(data)}
                        >
                            {data?.component}
                        </div>
                    ))}
                </div>


            </div>
        </div >
    )
}

export default MainContent