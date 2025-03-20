import React from "react";
import { motion } from "framer-motion";

const Aboutme_buttons = ({
  setActiveSection,
}: {
  setActiveSection: (section: string) => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 2 }}
    >
      <div className=" w-full 2xl:p-20 mt-[31px] ">
        <h2 className="flex items-center justify-center lg:justify-start lg:pl-[50px] inner-text-shadow  text-[24px] md:text-[30px] lg:text-[36px] 2xl:text-[50px]  ">
          ABOUT ME?
        </h2>

        <div className="lg:flex lg:space-x-5 xl:flex-col ">
          <div className="mt-[30px]">
            <a className="cursor-pointer border border-[#6D895C]  bg-white custom-rounded xl:pb-[30px] pb-[15px] pl-[5px]  xl:pt-[20px]  xl:w-[357px] xl:h[79px]">
              <button
                onClick={() => setActiveSection("Personal Information")}
                className=" cursor-pointer bg-[#6D895C] xl:py-[25px] xl:px-[77px]  py-[10px] px-[10px] w-[250px] xl:w-[357px] xl:h[79px]  custom-rounded"
              >
                <h6 className="text-white text-[14px] md:text-[18px] font-bold  text-center lg:text-start  ">
                  Personal Information
                </h6>
              </button>
            </a>
          </div>

          <div className="mt-[30px]">
            <a
              target="_blank"
              className="cursor-pointer border border-[#6D895C]  bg-white xl:pb-[30px] pb-[15px] pl-[5px]  xl:pt-[20px]  xl:w-[357px] xl:h[79px]  custom-rounded "
            >
              <button
                onClick={() => setActiveSection("Education")}
                className=" cursor-pointer bg-[#6D895C] xl:py-[25px] xl:px-[77px]  py-[10px] px-[60px] w-[250px] xl:w-[357px] xl:h[79px]   custom-rounded"
              >
                <h6 className="text-white text-[14px] md:text-[18px] font-bold text-center lg:text-start">
                  Education
                </h6>
              </button>
            </a>
          </div>
          <div className="mt-[30px]">
            <a
              target="_blank"
              className="cursor-pointer border border-[#6D895C]  bg-white xl:pb-[30px] pb-[15px] pl-[5px]  xl:pt-[20px]  xl:w-[357px] xl:h[79px]  custom-rounded 
"
            >
              <button
                onClick={() => setActiveSection("Skills")}
                className=" cursor-pointer bg-[#6D895C] xl:py-[25px] xl:px-[77px]  py-[10px] px-[60px] w-[250px] xl:w-[357px] xl:h[79px] custom-rounded"
              >
                <h6 className="text-white text-[14px] md:text-[18px] font-bold text-center lg:text-start ">
                  Skills
                </h6>
              </button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Aboutme_buttons;
