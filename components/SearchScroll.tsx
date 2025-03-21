"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const SearchScroll = () => {
  const searchParams = useSearchParams();
  const [sectionName, setSectionName] = useState<string | null>(null);

  useEffect(() => {
    const name = searchParams.get("name");
    if (name) setSectionName(name); // Prevent hydration mismatch
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

  return null; // No UI needed, just scroll logic
};

export default SearchScroll;
