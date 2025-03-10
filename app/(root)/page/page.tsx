"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { GithubIcon, Insta, LinkedinIcon } from "@/public/icons/icons";
import AboutDetails from "@/components/aboutDetails";
import ContactForm from "@/components/ContactForm";
import My_portfolio from "@/components/my_portfolio";

const titles = ["UI Designer", "Frontend Developer"];

const Page = () => {
  const [data, setData] = useState({ name: "", description: "" });
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1500;

  const searchParams = useSearchParams();

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    const currentWord = titles[wordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setTypedText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setTypedText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  // Scroll to section based on URL query param (?name=about, ?name=contact, etc.)
  useEffect(() => {
    const sectionName = searchParams.get("name");
    if (sectionName) {
      const section = document.getElementById(sectionName);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [searchParams]);

  return (
    <>
      <div
        id="home"
        className="2xl:px-[242px] xl:px-[70px] px-[30px] py-[40px]"
      >
        <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse items-center lg:h-screen justify-center">
          <div>
            <div className="text-center lg:text-start space-y-5 pt-10">
              <h1 className=" text-[24px] md:text-[30px] lg:text-[36px]  text-shadow ">
                {data.name}
              </h1>

              <div className="flex items-center justify-center lg:justify-start text-[20px] md:text-[24px] lg:text-[30px]">
                <span className="flex items-center">
                  <span className="mr-2">I'm a</span>
                  <span className="typing-text font-bold text-[#60DF92] inner-text-shadow">
                    {typedText}
                  </span>
                  <span className="cursor text-[#60DF92] inner-text-shadow">
                    |
                  </span>
                </span>
              </div>

              <div className="max-w-[600px] text-[12px] md:text-[18px] lg:text-[20px] text-justify">
                <p>{data.description}</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center lg:justify-start md:flex-row mt-[30px]">
              <a
                href="/resume.pdf"
                download="Jane_resume.pdf"
                className="download-link "
              >
                <button className="download-button  ">
                  <h6 className="text-[14px] md:text-[18px] lg:text-[20px] p-3">
                    DOWNLOAD CV
                  </h6>
                </button>
              </a>

              <div className="flex md:ml-[57px] space-x-[19px] mt-[20px] md:mt-0 cursor-pointer">
                <a
                  href="https://www.instagram.com/janeochavo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Insta />
                </a>
                <a
                  href="https://github.com/janeochavo060"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <GithubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/jane-ochavo-023b6934b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <Image
              src="/images/jane.png"
              width={485}
              height={647}
              alt="profile_logo"
              className="relative z-10 h-[400px] lg:h-auto object-cover border_image"
            />
          </div>
        </div>
      </div>

      {/* Sections with corresponding IDs */}
      <div id="about">
        <AboutDetails />
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
