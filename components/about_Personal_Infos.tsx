"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const About_Personal_Details = () => {
  interface Data {
    name?: string;
    personalInformation?: {
      description?: string;
      gender?: string;
      age?: number;
      languages?: string[];
      city?: string;
      nationality?: string;
      phone?: string;
      email?: string;
      status?: string;
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
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}
    >
      <div>
        <div className=" lg:pl-[30px] xl:pl-[70px] pt-[70px]">
          <div className="text-center lg:text-start">
            <h2 className="text-[20px] md:text-[25px] lg:text-[30px]">
              Personal Information
            </h2>
            <p className="font-normal text-[12px] md:text-[18px] lg:text-[20px] text-gray-800 font-inter">
              {data.personalInformation?.description}
            </p>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between lg:grid-cols-3 pt-[50px] md:pt-[40px] lg:pt-[70px] text-center md:text-start">
            <ul className="md:space-y-10 space-y-3 flex-1">
              <li className="text-[14px] md:text-[16px] md:flex">
                <strong>Name:</strong> <span>{data.name}</span>
              </li>
              <li className="text-[14px] md:text-[16px] md:flex">
                <strong>Languages:</strong>{" "}
                <span>{data.personalInformation?.languages?.join(", ")}</span>
              </li>
              <li className="text-[14px] md:text-[16px]">
                <strong>Phone:</strong>{" "}
                <span>{data.personalInformation?.phone}</span>
              </li>
            </ul>

            <ul className="md:space-y-10 space-y-3  mt-3 md:mt-0  md:mr-5 2xl:mr-10">
              <li className="text-[14px] md:text-[16px]">
                <strong>Gender:</strong>{" "}
                <span>{data.personalInformation?.gender}</span>
              </li>
              <li className="text-[14px] md:text-[16px]">
                <strong>City:</strong>{" "}
                <span>{data.personalInformation?.city}</span>
              </li>
              <li className=" md:flex text-[14px] md:text-[16px]">
                <strong>Email:</strong>{" "}
                <span>{data.personalInformation?.email}</span>
              </li>
            </ul>

            <ul className="md:space-y-10 space-y-3 justify-end">
              <li className="text-[14px] md:text-[16px]">
                <strong>Age:</strong>{" "}
                <span>{data.personalInformation?.age}</span>
              </li>
              <li className="text-[14px] md:text-[16px]">
                <strong>Nationality:</strong>{" "}
                <span>{data.personalInformation?.nationality}</span>
              </li>
              <li className="text-[14px] md:text-[16px]">
                <strong>Status:</strong>{" "}
                <span>{data.personalInformation?.status}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About_Personal_Details;
