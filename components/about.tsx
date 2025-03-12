import Aboutme_buttons from "@/components/aboutme_buttons";
// import About_Personal_Infos from "@/components/about_Personal_Infos";
// import AboutEducation from "@/components/aboutEducation";
import AboutSkills from "./aboutSkills";

const About = () => {
  return (
    <div className="flex items-center  2xl:justify-between flex-col xl:flex-row 2xl:px-[242px] xl:px-[70px] px-[30px]  py-[40px] h-full">
      <div className="">
        <Aboutme_buttons />
      </div>
      {/* <div>
        
        <About_Personal_Infos />
      </div> 
      <div className=" ">
        <AboutEducation />
      </div>*/}
      <div>
        <AboutSkills />
      </div>
    </div>
  );
};
export default About;
