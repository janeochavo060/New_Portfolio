"use client";
import React from "react";
import { Fb, Email, Phone } from "@/public/icons/icons";
import Image from "next/image";

const ContactForm = () => {
  return (
    <div className=" 2xl:px-[242px] xl:px-[70px] px-[30px] py-[40px] h-screen">
      <div className="flex items-center justify-center text-[40px]  mt-[48px] mb-[32px] text-[#60DF92] inner-text-shadow ">
        <h1>CONTACT</h1>
      </div>
      <div className="grid grid-cols-2 h-screen">
        <div className="max-w-[724px] max-h-[669px] rounded-[20px] bg-[#E2E8D5] p-[60px]">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Fullname "
              className="p-3 rounded-[10px] bg-white placeholder-gray-400 font-inconsolata"
            />
            <div className="flex gap-4 w-full">
              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded-[10px] bg-white w-1/2 placeholder-gray-400 font-inconsolata"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="p-3 rounded-[10px]  bg-white w-1/2 placeholder-gray-400 font-inconsolata"
              />
            </div>
            <textarea
              placeholder="Message..."
              className="p-3 rounded-[10px] bg-white h-[306px] placeholder-gray-400 font-inconsolata"
            ></textarea>
            <div className="flex items-center justify-center">
              <button className="p-3 w-[250px]  rounded-[147px] max-h-[55px] bg-[#6D895C] font-extrabold text-white hover:bg-[#50c87d] transition">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
        <div className="mt-2 pl-20">
          <h2 className="text-[48px] text-shadow">
            Connect with me{" "}
            <span className="text-[#60DF92] text-shadow">on</span>
          </h2>

          <div>
            <div className=" flex bg-[#E2E8D5] p-4 rounded-[20px] mt-4 w-[500px] items-center ">
              <Fb />
              <h6 className="text-[20px] ml-[10px]">Jane Tzuyu Ochavo</h6>
            </div>
            <div className=" flex bg-[#E2E8D5] p-4 rounded-[20px] mt-4 w-[500px] items-center ">
              <Email />
              <h6 className="text-[20px] ml-[10px]">janeochavo060@gmail.com</h6>
            </div>
            <div className=" flex bg-[#E2E8D5] p-4 rounded-[20px] mt-4 w-[500px] items-center ">
              <Phone />
              <h6 className="text-[20px] ml-[10px]">(+63) 126 501 665</h6>
            </div>

            <div className="flex items-center justify-center mt-[69px]">
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
