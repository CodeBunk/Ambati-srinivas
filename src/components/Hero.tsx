import react, { useState } from "react"
import Sidebar from "@/components/Sidebar"
import DefaultImage from "@/assets/avatar/default.jpeg"
import open from "@/assets/avatar/Open.jpeg"
import smile from "@/assets/avatar/smile.jpeg"
import Sideeyed from "@/assets/avatar/sideEyed.jpeg"
import MainContent from "./MainContent"
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
    return (
        <div className="flex items-center md:flex-row flex-col  w-full h-full md:min-h-screen gap-10 md:p-10 overflow-scroll text-white bg-black">
            <div className="md:w-1/3 w-full h-full p-4 border shadow bg-white/10 border-white/20 shadow-gray rounded-xl "
                onMouseEnter={() => handleImageChange("smile")} onMouseLeave={() => handleImageChange("")} >
                <Sidebar props={ImageType} />
            </div>
            <div className="w-full h-full overflow-hidden shadow bg-white/10 border-white/20 border shadow-gray rounded-xl "
                onMouseEnter={() => handleImageChange("sideeyed")} onMouseLeave={() => handleImageChange("")} >

                <MainContent />
            </div>
            <div>

            </div>
        </div>)
}
export default Hero