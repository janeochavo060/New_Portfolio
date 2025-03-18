"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Hamburger } from "@/public/icons/icons";

const sections = ["home", "about", "portfolio", "contact"];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Load active section from URL
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const sectionFromUrl = params.get("name") || "home";
      setActiveSection(sectionFromUrl);
    }
  }, [pathname, searchParams]);

  // Scroll Detection - Updates active section when user scrolls
  useEffect(() => {
    if (isUserScrolling) return; // Prevent scroll detection when clicking nav

    const handleScroll = () => {
      let currentSection = "home";
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });
      setActiveSection(currentSection);
      router.replace(`?name=${currentSection}`, { scroll: false });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isUserScrolling]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavigation = (section: string) => {
    setIsUserScrolling(true); // Disable scroll detection temporarily
    setActiveSection(section);
    router.push(`?name=${section}`, { scroll: false });

    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);

    // Re-enable scroll detection after 1.2s
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsUserScrolling(false);
    }, 1200);
  };

  return (
    <div className="bg-[#E2E8D5] 2xl:px-[242px] xl:px-[70px] py-[10px] w-full uppercase sticky top-0 z-50 shadow-md">
      <div className="px-[30px] flex items-center justify-center">
        <div>
          <Image
            src="/images/logojane.png"
            width={41}
            height={50}
            alt="logo"
            className="w-full h-full aspect-[41/50]"
          />
        </div>

        {/* Hamburger Icon (Visible on mobile) */}
        <div className="ml-auto flex lg:hidden items-center justify-end">
          <button onClick={toggleMenu} className="cursor-pointer">
            <Hamburger />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex ml-auto items-center justify-center space-x-[100px] font-poppins text-[20px]">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => handleNavigation(section)}
              className={`hover:text-green-500 hover:border-green-500 ${
                activeSection === section
                  ? "text-green-600 border-b-2 border-green-600"
                  : ""
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`lg:hidden bg-gray-400 flex items-center flex-col justify-center fixed top-[79px] left-0 w-full h-full z-50 transition-all duration-300 ease-in-out transform ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <div className="text-white flex flex-col transition-all text-center">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => {
                toggleMenu();
                handleNavigation(section);
              }}
              className={`group p-10 hover:text-2xl text-lg hover:text-green-500 ${
                activeSection === section ? "text-green-600" : ""
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
