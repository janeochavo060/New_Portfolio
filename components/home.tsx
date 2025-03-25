"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { GithubIcon, Insta, LinkedinIcon } from "@/public/icons/icons";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HomeContent = () => {
  const [data, setData] = useState({ name: "", description: "" });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();

  // Fetch Data.json
  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load data");
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div
        id="home"
        className="relative 2xl:px-[242px] xl:px-[70px] px-[30px] py-[40px]"
      >
        <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse items-center lg:h-screen justify-center">
          <div>
            <div className="text-center lg:text-start space-y-5 pt-10">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-[24px] md:text-[30px] lg:text-[36px] text-shadow"
              >
                {data.name}
              </motion.div>

              <div className="flex items-center justify-center lg:justify-start text-[20px] md:text-[24px] lg:text-[30px]">
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2 }}
                  className="text-[24px] md:text-[30px] lg:text-[36px] text-shadow"
                >
                  <span className="flex items-center">
                    <span className="mr-2">I&apos;m a</span>
                    <TypeAnimation
                      sequence={["Frontend Dev", 1000, "UI Designer", 1000]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                      className="typing-text font-bold text-[#60DF92] inner-text-shadow"
                    />
                  </span>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 3 }}
                className="max-w-[600px] text-[12px] md:text-[18px] lg:text-[20px] text-justify"
              >
                {data.description}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center justify-center lg:justify-start md:flex-row mt-[30px]"
            >
              <a
                href="/resume.pdf"
                download="Jane_resume.pdf"
                className="download-link"
              >
                <button className="download-button">
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
                  aria-label="Instagram"
                >
                  <Insta />
                </a>
                <a
                  href="https://github.com/janeochavo060"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <GithubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/jane-ochavo-023b6934b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </motion.div>
          </div>
          <div className="relative flex items-center justify-center  lg:pl-10 xl:pl-0  ">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            >
              <Image
                src="/images/jane.png"
                width={485}
                height={647}
                alt="profile"
                className="relative z-10 h-[400px] lg:h-auto object-cover border_image"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
};

export default Home;
