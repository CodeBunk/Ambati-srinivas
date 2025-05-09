import React from 'react'
import JobCard from '../Elements/Resumecard'
import LCS from "../../assets/images/LCS.png"
import Image from "../../assets/avatar/default.jpeg"
import Travana from "../../assets/images/Travana.png"
const About = () => {

    const Experiences = [
        {
            company: "Freelance",
            href: "",
            badges: [],
            location: "Hyderabad",
            title: "Frontend Developer",
            logoUrl: Image,
            start: " Oct 2024",
            // end: "",
            description:
                "Led full-stack development initiatives for diverse client projects, implementing end-to-end solutions using React, Node.js, and MongoDB. Designed and developed RESTful APIs, managed database architecture, and implemented secure authentication systems. Created responsive, user-friendly interfaces while ensuring optimal performance and scalability. Collaborated with clients to understand requirements, provide technical guidance, and deliver solutions that exceeded expectations.",
        },
        {
            company: "Leafcraft Pvt LTD",
            href: "https://leafcraft.co",
            badges: [],
            location: "Hyderabad",
            title: "Frontend Developer",
            logoUrl: LCS,
            start: " Oct 2022",
            end: "Oct 2024",
            description:
                "Played a key role in shaping the startup's vision by building scalable and dynamic solutions from the ground up. Took ownership of the frontend architecture, ensuring seamless user experiences. Collaborated closely with cross-functional teams to drive innovation and deliver high-impact features under tight deadlines, embodying the fast-paced startup culture.",
        },

        {
            company: "Travana",
            href: "https://travana.io",
            badges: [],
            location: "United States",
            title: "Frontend Developer",
            logoUrl: Travana,
            start: "Oct 2023",
            end: " May 2024",
            description:
                "Developed and maintained a personalized travel planner application, implementing features for customized trip planning, booking, and itinerary management while integrating with external APIs. Designed intuitive and visually appealing user interfaces to enhance the user experience for personalized trip planning and booking. Managed the application's infrastructure, setting up CI/CD pipelines and monitoring performance to ensure a seamless and reliable user experience.",
        },

        // {
        //     company: "Trinity XR",
        //     href: "https://trinityxr.in",
        //     badges: [],
        //     location: "Remote",
        //     title: "Frontend Developer",
        //     logoUrl: "/trinityxr.png",
        //     start: "2023",
        //     end: "Present",
        //     description:
        //         "Developed an immersive VR/AR platform using Three.js and React to enhance real estate, education, and healthcare experiences.",
        // },
    ]
    return (
        <div className='  overflow-scroll pt-10 flex flex-col gap-10 font-poppins'>
            <div className=' w-full h-full '>

                <div className=' text-2xl font-Bold pb-3    '>Helloo!</div>
                <div className=' font-poppins  '>
                    I'm a Fullstack Web Developer skilled in React, TypeScript, Tailwind CSS, Node.js, Express.js, and MongoDB, focused on building scalable, high-performance applications. I specialize in clean UI design, seamless API integrations, and optimized user experiences, ensuring every interface is both functional and visually compelling.
                </div>
                <br />
                <div className=' font-poppins    '>
                    With a strong understanding of UI/UX principles and backend architecture, I create intuitive, end-to-end solutions that enhance usability, engagement, and performance. I'm constantly learning, adapting to new technologies, and refining my approach to deliver efficient, maintainable, and high-quality code.                </div>

            </div>
            <div className=' w-full h-full '>


                <div className=' text-2xl font-Bold pb-3 '> Work Experiences</div>

                <div>
                    {Experiences.map((work) => (
                        <JobCard
                            key={work.company}
                            logoUrl={work.logoUrl}
                            location={work?.location}
                            title={work.company}
                            company={work.company}
                            href={work?.href}
                            start={`${work.start}`}
                            end={`${work.end ?? "Present"}`}
                            description={work.description}
                        />

                    ))}
                </div>
            </div>
        </div >

    )
}

export default About


