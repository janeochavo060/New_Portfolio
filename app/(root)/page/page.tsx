"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import About from "@/components/about";
import ContactForm from "@/components/ContactForm";
import My_portfolio from "@/components/my_portfolio";
import Home from "@/components/home";

const Page = () => {
  const [sectionName, setSectionName] = useState<string | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const name = searchParams.get("name");
    setSectionName(name); // Store in state after hydration
  }, [searchParams]);

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
