"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { GithubRound } from "@/public/icons/icons";
import { motion } from "framer-motion";

const My_portfolio = () => {
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
    <div className="2xl:px-[242px] xl:px-[70px] px-[30px] py-[40px] h-full ">
      <div className="flex items-center justify-center  mt-[48px] mb-[32px] text-[#60DF92] inner-text-shadow ">
        <h1 className="text-[24px] md:text-[30px] lg:text-[36px] 2xl:text-[50px] ">
          MY PORTFOLIO
        </h1>
      </div>
      <div className=" max-w-[1100px]  mx-auto space-y-24 ">
        {data.portfolio.data.map((content, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`flex ${
              index % 2 === 1
                ? "flex-col md:flex-row-reverse bg-white shadow-2xl p-8 rounded-xl "
                : "flex-col md:flex-row bg-white shadow-2xl p-8 rounded-xl"
            }`}
          >
            <div className="space-y-2 max-w-[650px] ">
              <div className="flex flex-col justify-center">
                <div className=" text-[56px]  lg:text-[96px] xl:text-[128px] font-bold">
                  {content.num}
                </div>

                <div className="flex items-center text-[18px] md:text-[32px] py-3">
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

                <p className="text-[10px] sm:text-[14px] lg:text-[16px] text-gray-700">
                  {content.description}
                </p>

                <div className="py-6 text-[11px] md:text-[14px] text-gray-600">
                  <span className="font-inconsolata text-[13px] md:text-[16px] font-semibold mr-2">
                    Technology used:
                  </span>
                  {content.tech_used}
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <Image
                src={content.image || "/images/default.png"}
                width={469}
                height={531}
                alt={content.title || "Portfolio Image"}
                className="rounded-lg object-cover md:min-w-[369px] lg:min-w-[469px]"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default My_portfolio;
