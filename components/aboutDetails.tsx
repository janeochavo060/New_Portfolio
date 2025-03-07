"use client";
import React, { useEffect, useState } from "react";
import Aboutme_buttons from "@/components/aboutme_buttons";

const AboutDetails = () => {
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
    return <div>Loading...</div>;
  }

  return (
    <div className="flex 2xl:px-[242px] xl:px-[70px] px-[30px] items-center py-[40px] h-screen">
      <div className="">
        <Aboutme_buttons />
      </div>
      <div className="pl-[70px] pt-[70px]">
        <h2 className="text-[30px]">Personal Information</h2>
        <p className=" font-normal text-[20px]">
          {data.personalInformation?.description}
        </p>

        <div className="w-full grid grid-cols-3  pt-[70px]">
          <ul className="space-y-10">
            <li className="">
              <strong className="">Name:</strong> {data.name}
            </li>
            <li>
              <strong>Languages:</strong>{" "}
              {data.personalInformation?.languages?.join(", ")}
            </li>
            <li>
              <strong>Phone:</strong> {data.personalInformation?.phone}
            </li>
          </ul>

          <ul className="space-y-10 ">
            <li>
              <strong>Gender:</strong> {data.personalInformation?.gender}
            </li>
            <li>
              <strong>City:</strong> {data.personalInformation?.city}
            </li>
            <li>
              <strong>Email:</strong> {data.personalInformation?.email}
            </li>
          </ul>

          <ul className="space-y-10 pl-10">
            <li>
              <strong>Age:</strong> {data.personalInformation?.age}
            </li>
            <li>
              <strong>Nationality:</strong>{" "}
              {data.personalInformation?.nationality}
            </li>
            <li>
              <strong>Status:</strong> {data.personalInformation?.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
