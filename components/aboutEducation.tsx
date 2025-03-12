"use client";
import React, { useEffect, useState } from "react";
import Aboutme_buttons from "@/components/aboutme_buttons";

const AboutEducation = () => {
  interface School {
    school_year?: string;
    school?: string;
    year_span?: string;
    description?: string;
  }

  interface Data {
    educationtab?: {
      title?: string;
      description?: string;
      schools?: School[];
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
      <div className="text-center xl:text-start ">
        <h2 className="text-[20px] md:text-[25px] lg:text-[30px]">
          {data.educationtab?.title}
        </h2>
        <p className="font-normal text-[12px] md:text-[18px] lg:text-[20px] text-gray-800 font-inter">
          {data.educationtab?.description}
        </p>
      </div>

      <div className="w-full grid md:grid-cols-2 gap-6 pt-[50px] md:pt-[70px]">
        {data.educationtab?.schools?.map((school, index) => (
          <div
            key={index}
            className="bg-[#E2E8D5] p-6 rounded-[17px] shadow-md"
          >
            <h3 className="text-[15px] md:text-[17px] lg:text-[19px] ">
              {school.school_year}
            </h3>
            <p className="text-[19px] md:text-[21px] lg:text-[23px] font-semibold">
              {school.school}
            </p>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <p className="text-[9px] md:text-[11px] lg:text-[13px] text-gray-600 font-inconsolata flex items-center">
                {school.year_span}
              </p>
            </div>

            <p className="text-[12px] md:text-[13px] lg:text-[15px] mt-4">
              {school.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutEducation;
