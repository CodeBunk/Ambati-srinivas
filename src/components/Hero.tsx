import react, { useState } from "react"
import Sidebar from "@/components/Sidebar"
import DefaultImage from "@/assets/avatar/default.jpeg"
import open from "@/assets/avatar/Open.jpeg"
import smile from "@/assets/avatar/smile.jpeg"
import Sideeyed from "@/assets/avatar/sideEyed.jpeg"
const Hero = () => {
    const [ImageType, setImageType] = useState(DefaultImage)

    const handleImageChange = (type: string) => {
        switch (type) {
            case 'open':
                return setImageType(open);
            case 'smile':
                return setImageType(smile);
            case 'sideeyed':
                return setImageType(Sideeyed);
            default:
                return setImageType(DefaultImage);
        }
    }
    return (<div className="flex items-center w-full h-full gap-10 p-10 overflow-hidden text-white bg-black">
        <div className="w-1/3 h-full p-4 border shadow bg-white/10 border-white/20 shadow-gray rounded-xl " onMouseEnter={() => handleImageChange("smile")} onMouseLeave={() => handleImageChange("")} > <Sidebar props={ImageType} /> </div>
        <div className="w-full h-full p-4 border shadow bg-white/10 border-white/20 shadow-gray rounded-xl " onMouseEnter={() => handleImageChange("sideeyed")} onMouseLeave={() => handleImageChange("")} >asdasd</div>

    </div>)
}
export default Hero