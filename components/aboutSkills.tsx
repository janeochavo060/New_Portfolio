"use client";
import React, { useEffect, useState } from "react";
import {
  Next,
  Vue,
  ReactIcon,
  Tailwind,
  Php,
  Figma,
} from "@/public/icons/icons";

const AboutSkills = () => {
  interface Skill {
    title?: string;
    description?: string;
  }

  interface Data {
    skills?: {
      title?: string;
      description?: string;
      hover_text?: Skill[];
    };
  }

  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data: Data) => setData(data));
  }, []);

  if (!data) {
    return <div className="flex justify-items-center">Loading...</div>;
  }

  return (
    <div className="lg:pl-[30px] xl:pl-[70px] pt-[70px] h-screen  xl:flex flex-col xl:items-center xl:justify-center">
      <div className="text-center lg:text-start">
        <h2 className="text-[20px] md:text-[25px] lg:text-[30px]">
          {data.skills?.title}
        </h2>
        <p className="font-normal text-[12px] md:text-[18px] font-inter text-gray-800 lg:text-[20px]">
          {data.skills?.description}
        </p>
      </div>

      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-[50px] md:pt-[70px]">
        {data.skills?.hover_text?.map((skill, index) => (
          <div
            key={index}
            className="relative group bg-[#E2E8D5] p-10 rounded-[17px] shadow-xl"
          >
            <div className="flex justify-center items-center">
              {index === 0 && <Next />}
              {index === 1 && <Vue />}
              {index === 2 && <ReactIcon />}
              {index === 3 && <Tailwind />}
              {index === 4 && <Php />}
              {index === 5 && <Figma />}
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1/2 flex flex-col justify-center items-center bg-[#9F9F9F] bg-opacity-68 p-4 rounded-b-[17px] shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-[13px] font-semibold">{skill.title}</h3>
              <span className="text-[12px]  ">{skill.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSkills;
