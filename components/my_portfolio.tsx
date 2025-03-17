import React from "react";
import FirstPortfolio from "@/components/firstPortfolio";
// import { LesserThan, GreaterThan } from "@/public/icons/icons";
// import Image from "next/image";
const My_portfolio = () => {
  return (
    <div className="2xl:px-[242px] xl:px-[70px] px-[30px] py-[40px] h-full">
      <div className="flex items-center justify-center  mt-[48px] mb-[32px] text-[#60DF92] inner-text-shadow ">
        <h1 className="text-[24px] md:text-[30px] lg:text-[36px] 2xl:text-[50px] ">
          MY PORTFOLIO
        </h1>
      </div>
      <FirstPortfolio />
    </div>
  );
};

export default My_portfolio;
