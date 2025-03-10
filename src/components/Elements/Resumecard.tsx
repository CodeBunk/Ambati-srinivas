import React from "react";

interface JobCardProps {
    company: string;
    href: string;
    location: string;
    title: string;
    logoUrl: string;
    start: string;
    end: string;
    description: string;
}

export default function JobCard({
    company,
    href,
    location,
    title,
    logoUrl,
    start,
    end,
    description,
}: JobCardProps) {
    return (
        <div className="w-full relative  md:p-4 rounded-2xl shadow-lg flex gap-4">
            <div className=" z-10  bg-white rounded-full  w-10 h-10 flex-none">
                <img src={logoUrl} alt={`${company} Logo`} className="  rounded-lg object-cover w-full h-full" />
            </div>

            {/* Job Info */}
            <div className="flex flex-col w-full">
                <div className=" flex md:flex-row flex-col  items-start justify-between ">

                    <div className="flex justify-between items-start">
                        <div className="">
                            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
                            <div className=" flex gap-3 ">

                                <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                                    {company}
                                </a>
                                <div className="flex items-center gap-1">
                                    📍 <span>{location}</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Location & Duration */}
                    <div className="flex items-center gap-4 pt-2 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                            📅 <span>{start} - {end}</span>
                        </div>
                    </div>
                </div>


                {/* Description */}
                <p className="pt-2 text-gray-700 text-sm">{description}</p>
            </div>
        </div>
    );
}