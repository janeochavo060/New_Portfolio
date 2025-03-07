"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Hamburger } from "@/public/icons/icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavigation = (section: string) => {
    router.push(`?name=${section}`, { scroll: false });

    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      <div className="bg-[#E2E8D5] 2xl:px-[242px] xl:px-[70px] px-[30px] py-[10px]  w-full flex uppercase sticky top-0 z-50">
        <div>
          <Image
            src="/images/logojane.png"
            width={51}
            height={80}
            alt="logo"
            className="w-full h-auto aspect-[51/80]"
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
          <button
            onClick={() => handleNavigation("home")}
            className="hover-text-green hover-border-green"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation("about")}
            className="hover-text-green hover-border-green"
          >
            About
          </button>
          <button
            onClick={() => handleNavigation("portfolio")}
            className="hover-text-green hover-border-green"
          >
            Portfolio
          </button>
          <button
            onClick={() => handleNavigation("contact")}
            className="hover-text-green hover-border-green"
          >
            Contact
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`lg:hidden bg-gray-400 flex items-center flex-col justify-center 
              fixed top-[110px] left-0 w-full h-full z-50 
              transition-all duration-300 ease-in-out transform 
              ${
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-5 pointer-events-none"
              }`}
      >
        <div className="text-white flex flex-col transition-all text-center">
          <button
            onClick={() => {
              toggleMenu();
              handleNavigation("home");
            }}
            className="group p-10 hover:text-2xl text-lg hover-text-green"
          >
            Home
          </button>
          <button
            onClick={() => {
              toggleMenu();
              handleNavigation("about");
            }}
            className="group p-10 hover:text-2xl text-lg hover-text-green"
          >
            About
          </button>
          <button
            onClick={() => {
              toggleMenu();
              handleNavigation("portfolio");
            }}
            className="group p-10 hover:text-2xl text-lg hover-text-green"
          >
            Portfolio
          </button>
          <button
            onClick={() => {
              toggleMenu();
              handleNavigation("contact");
            }}
            className="group p-10 hover:text-2xl text-lg hover-text-green"
          >
            Contact
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
