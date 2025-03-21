"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import About from "@/components/about";
import ContactForm from "@/components/ContactForm";
import My_portfolio from "@/components/my_portfolio";
import Home from "@/components/home";

const Page = () => {
  const [sectionName, setSectionName] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Extract the section name from the path
    const pathParts = pathname.split("/");
    const name = pathParts[pathParts.length - 1]; // Get last part of the URL
    if (name) setSectionName(name);
  }, [pathname]);

  useEffect(() => {
    if (sectionName) {
      setTimeout(() => {
        const section = document.getElementById(sectionName);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    }
  }, [sectionName]);

  return (
    <>
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
