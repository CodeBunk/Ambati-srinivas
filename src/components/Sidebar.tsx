import React, { useEffect, useState } from 'react'
import DefaultImage from "@/assets/avatar/default.jpeg"
import open from "@/assets/avatar/Open.jpeg"
import smile from "@/assets/avatar/smile.jpeg"
import Sideeyed from "@/assets/avatar/sideEyed.jpeg"
import Icons from '@/components/Icons'
const Sidebar = (props: any) => {

    const [image, serImage] = useState(DefaultImage)


    const data = [{ Icon: "Email", name: "Email", value: "asreddy5270@gmail.com", Link: "mailto:asreddy5270@gmail.com" },
    { Icon: "Phone", name: "Phone", value: "+91 903259****", Link: "tel:+919032594344" },
    { Icon: "Location", name: "location", value: "Hyderabad, TG", }]


    return (
        <div className='flex flex-col items-center justify-between md:h-full gap-5'>
            <div className='flex flex-col items-start gap-5 '>
                <div className='flex md:flex-col flex-row items-start gap-5 '>

                    <img src={props?.props} alt="" className='md:w-4/5 w-1/2  mx-auto mb-2 overflow-hidden duration-500 rounded-full tranition-all item-center' />
                    <div className='w-full md:flex hidden text-xl font-medium text-center font-'>Ambati Ananthe Siva Srinivasa Reddy </div>

                    <div className='md:hidden flex flex-col items-center  justify-center h-full  gap-5 '>


                        <div className='w-full text-md font-medium text-center font-'>Ambati Ananthe Siva Srinivasa Reddy </div>

                        <div className=' flex items-center justify-center'>
                            {data?.map((prop: any) =>
                                <div className="relative w-full   mx-auto">

                                    <a href={prop?.Link} target="_blank" className="relative select-none z-10 flex items-center w-full h-full gap-5 m-[0.5px] p-1 px-2 border-[0.5px] border-transparent border-opacity-50 hover:border-white hover:border-opacity-50 cursor-pointer transition-all duration-600   rounded-lg">
                                        <div className="flex items-center justify-center rounded-lg opacity-50 pointer-events-none bg-gradient-to-br hover:bg-white from-yellow-400 via-black to-black">
                                            <div className='p-1.5 '>
                                                <Icons variant={prop?.Icon} />
                                            </div>
                                        </div>
                                        {/* <div className="md:flex hidden flex-col items-start justify-around ">
                                            <div className="text-xs opacity-50">{prop?.name}</div>
                                            <div className="text-md">{prop?.value}</div>
                                        </div> */}
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
                <div className='md:flex hidden flex-col items-center w-full justify-around md:items-start gap-5 '>
                    {data?.map((prop: any) =>
                        <div className="relative w-full   mx-auto">

                            <a href={prop?.Link} target="_blank" className="relative select-none z-10 flex items-center w-full h-full gap-5 m-[0.5px] p-1 px-2 border-[0.5px] border-transparent border-opacity-50 hover:border-white hover:border-opacity-50 cursor-pointer transition-all duration-600   rounded-lg">
                                <div className="flex items-center justify-center rounded-lg opacity-50 pointer-events-none bg-gradient-to-br hover:bg-white from-yellow-400 via-black to-black">
                                    <div className='p-1.5 '>
                                        <Icons variant={prop?.Icon} />
                                    </div>
                                </div>
                                <div className="md:flex hidden flex-col items-start justify-around ">
                                    <div className="text-xs opacity-50">{prop?.name}</div>
                                    <div className="text-md">{prop?.value}</div>
                                </div>
                            </a>
                        </div>
                    )}

                </div>
            </div>

            <div className="flex items-center justify-center gap-4 ">
                {/* <Icons variant="Youtube" Link="https://www.youtube.com" /> */}
                <Icons variant="Instagram" Link="https://www.instagram.com/siva_srinivas23/" />
                {/* <Icons variant="Youtube" Link="https://www.youtube.com" /> */}
                <Icons variant="Twitter" Link="https://x.com/sivasrinivas_23" />
                <Icons variant="LinkedIn" Link="https://www.linkedin.com/in/srinivasambati" />
            </div>
        </div >
    )
}

export default Sidebar