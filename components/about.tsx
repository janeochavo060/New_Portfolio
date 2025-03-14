import { useState } from "react";
import Aboutme_buttons from "@/components/aboutme_buttons";
import About_Personal_Infos from "@/components/about_Personal_Infos";
import AboutEducation from "@/components/aboutEducation";
import AboutSkills from "./aboutSkills";

const About = () => {
  const [activeSection, setActiveSection] = useState("Personal Information");

  return (
    <div className="flex items-center 2xl:justify-between flex-col xl:flex-row 2xl:px-[242px] xl:px-[70px] px-[30px] py-[40px] h-screen">
      <div>
        <Aboutme_buttons setActiveSection={setActiveSection} />
      </div>
      <div>
        {activeSection === "Personal Information" && <About_Personal_Infos />}
        {activeSection === "Education" && <AboutEducation />}
        {activeSection === "Skills" && <AboutSkills />}
      </div>
    </div>
  );
};

export default About;
