import React from "react";

const Aboutme_buttons = () => {
  return (
    <div className=" p-10 mt-[31px] ">
      <h2 className="inner-text-shadow  text-[40px] pl-[50px]">ABOUT ME?</h2>

      <div className="mt-[30px]">
        <a
          href="/page?name=about"
          className="cursor-pointer border border-[#6D895C]  bg-white custom-rounded pb-[30px] pl-[5px] pt-[20px]"
        >
          <button className=" cursor-pointer bg-[#6D895C] py-[25px] px-[77px] custom-rounded">
            <h6 className="text-white text-[18px] font-bold ">
              Personal Information
            </h6>
          </button>
        </a>
      </div>

      <div className="mt-[30px]">
        <a
          href="/"
          target="_blank"
          className="cursor-pointer border border-[#6D895C]  bg-white custom-rounded pb-[30px] pl-[5px] pt-[20px]"
        >
          <button className=" cursor-pointer bg-[#6D895C] py-[25px] px-[77px] custom-rounded">
            <h6 className="text-white text-[18px] font-bold text-start">
              Education
            </h6>
          </button>
        </a>
      </div>
      <div className="mt-[30px]">
        <a
          href="/"
          target="_blank"
          className="cursor-pointer border border-[#6D895C]  bg-white custom-rounded pb-[30px] pl-[5px] pt-[20px]"
        >
          <button className=" cursor-pointer bg-[#6D895C] py-[25px] px-[77px] custom-rounded">
            <h6 className="text-white text-[18px] font-bold text-start ">
              Skills
            </h6>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Aboutme_buttons;
