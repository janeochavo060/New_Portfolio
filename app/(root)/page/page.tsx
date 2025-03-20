"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import About from "@/components/about";
import ContactForm from "@/components/ContactForm";
import My_portfolio from "@/components/my_portfolio";
import Home from "@/components/home";

const Page = () => {
  const searchParams = useSearchParams();

  // Scroll to Section Based on URL Parameter
  useEffect(() => {
    const sectionName = searchParams.get("name");
    if (sectionName) {
      setTimeout(() => {
        const section = document.getElementById(sectionName);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    }
  }, [searchParams]);

  return (
    <>
      {/* Sections with corresponding IDs */}
      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="portfolio">
        <My_portfolio />
      </div>

      <div id="contact">
        <ContactForm />
      </div>
    </>
  );
};

export default Page;
