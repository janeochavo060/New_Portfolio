"use client";
import React from "react";
import { Fb, Email, Phone } from "@/public/icons/icons";
import Image from "next/image";

const ContactForm = () => {
  return (
    <div className=" 2xl:px-[242px] xl:px-[70px] px-[30px] py-[40px] h-screen">
      <div className="flex items-center justify-center  mt-[48px] mb-[32px] text-[#60DF92] inner-text-shadow ">
        <h1 className="text-[24px] md:text-[30px] lg:text-[36px] 2xl:text-[50px] ">
          CONTACT
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 w-full">
        <div className=" h-[489px] md:h-[459px] lg:h-[599px] rounded-[20px] bg-[#E2E8D5]  p-[30px] lg:p-[40px] 2xl:p-[60px] max-w-[900px] ">
          <form className="flex flex-col gap-4 w-full">
            <input
              type="text"
              placeholder="Fullname "
              className="p-3 rounded-[10px] bg-white placeholder-gray-400 font-inconsolata w-full  text-[10px] md:text-[12px] lg:text-[14px] 2xl:text-[16px] "
            />
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded-[10px] bg-white w-full placeholder-gray-400 font-inconsolata  responsive-text "
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="p-3 rounded-[10px]  bg-white w-full placeholder-gray-400 font-inconsolata  responsive-text "
              />
            </div>
            <textarea
              placeholder="Message..."
              className="p-3 rounded-[10px] bg-white h-[200px] lg:h-[306px] placeholder-gray-400 font-inconsolata w-full  responsive-text"
            ></textarea>
            <div className="flex items-center justify-center">
              <button className="p-3 md:w-[250px]  rounded-[147px] max-h-[55px] w-full bg-[#6D895C] font-extrabold text-white hover:bg-[#50c87d] transition  text-[14px] md:text-[18px] lg:text-[20px]">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
        <div className="mt-2 lg:pl-20">
          <h2 className=" py-[20px] text-shadow  text-[25px] md:text-[29px] lg:text-[36px] 2xl:text-[48px] text-center lg:text-start">
            Connect with me
            <span className="text-[#60DF92] px-2 text-shadow">on</span>
          </h2>

          <div className="">
            <div className="flex flex-col items-center lg:items-start justify-center">
              <div className=" flex bg-[#E2E8D5] lg:py-4 py-2 px-4 rounded-[20px] mt-4 max-w-[500px] items-center  w-full ">
                <Fb />
                <h6 className="ml-[10px] text-[12px] md:text-[16px] lg:text-[18px] 2xl:text-[20px]">
                  Jane Tzuyu Ochavo
                </h6>
              </div>
              <div className=" flex bg-[#E2E8D5]  lg:py-4 py-2 px-4  rounded-[20px] mt-4 max-w-[500px]   w-full items-center  ">
                <Email />
                <h6 className=" ml-[10px] text-[12px] md:text-[16px] lg:text-[18px] 2xl:text-[20px]">
                  janeochavo060@gmail.com
                </h6>
              </div>
              <div className=" flex bg-[#E2E8D5]  lg:py-4 py-2 px-4  rounded-[20px] mt-4 max-w-[500px] w-full items-center  ">
                <Phone />
                <h6 className=" ml-[10px] text-[12px] md:text-[16px] lg:text-[18px] 2xl:text-[20px]">
                  (+63) 126 501 665
                </h6>
              </div>
            </div>

            <div className="flex items-center justify-center  mt-[69px]">
              <Image
                src="/images/contact.png"
                alt="icons"
                width={253}
                height={227}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
