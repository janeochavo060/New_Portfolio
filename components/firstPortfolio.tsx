"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { LesserThan, GreaterThan, GithubRound } from "@/public/icons/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FirstPortfolio = () => {
  interface Content {
    num?: string;
    title?: string;
    description?: string;
    tech_used?: string;
    image?: string;
    github?: string;
  }
  interface Data {
    portfolio?: {
      data?: Content[];
    };
  }

  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data || !data.portfolio?.data) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center w-full px-4 md:px-10">
      {/* Swiper Component */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        className="w-full max-w-[1228px]"
      >
        {data.portfolio.data.map((content, index) => (
          <SwiperSlide key={index}>
            {/* Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 bg-[#E2E8D5] max-w-full w-[1228px] h-auto md:h-[629px] rounded-[49px] p-[30px] md:p-[50px] drop-shadow-xl hover:drop-shadow-2xl transition-shadow">
              {/* Left Section - Image */}
              <div className="flex items-center justify-center">
                <Image
                  src={content.image || "/images/default.png"}
                  width={469}
                  height={531}
                  alt={content.title || "Portfolio Image"}
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Right Section - Content */}
              <div className="flex flex-col justify-center">
                <div className="text-[96px] md:text-[128px] font-bold">
                  {content.num}
                </div>

                <div className="flex items-center text-[28px] md:text-[32px] py-3">
                  <span className="font-semibold text-gray-800">
                    {content.title}
                  </span>
                  <div className="px-2">
                    <a
                      href={content.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link flex items-center"
                    >
                      <GithubRound />
                    </a>
                  </div>
                </div>

                <p className="text-[16px] text-gray-700">
                  {content.description}
                </p>

                <div className="py-6 text-[14px] text-gray-600">
                  <span className="font-inconsolata text-[16px] font-semibold mr-2">
                    Technology used:
                  </span>
                  {content.tech_used}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button className="prev-btn absolute left-4 md:left-10 z-10 cursor-pointer">
        <LesserThan />
      </button>
      <button className="next-btn absolute right-4 md:right-10 z-10 cursor-pointer">
        <GreaterThan />
      </button>
    </div>
  );
};

export default FirstPortfolio;
