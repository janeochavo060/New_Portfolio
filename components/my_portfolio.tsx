import React from "react";
import { LesserThan, GreaterThan } from "@/public/icons/icons";
import Image from "next/image";
const My_portfolio = () => {
  return (
    <div className="2xl:px-[242px] xl:px-[70px] px-[30px] py-[40px] h-full">
      <div className="flex items-center justify-center  mt-[48px] mb-[32px] text-[#60DF92] inner-text-shadow ">
        <h1 className="text-[24px] md:text-[30px] lg:text-[36px] 2xl:text-[50px] ">
          MY PORTFOLIO
        </h1>
      </div>

      <div className="flex justify-between">
        <div>
          <LesserThan />
        </div>
        <div className="bg-[#E2E8D5] w-[1228px] h-[629px] rounded-[49px] p-[50px]">
          <Image
            src="/images/warsmows.png"
            width={469}
            height={531}
            alt="warsmows"
          />
        </div>
        <div>
          <GreaterThan />
        </div>
      </div>
    </div>
  );
};

export default My_portfolio;
