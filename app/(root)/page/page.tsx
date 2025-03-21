import { Suspense } from "react";
import About from "@/components/about";
import ContactForm from "@/components/ContactForm";
import MyPortfolio from "@/components/my_portfolio";
import Home from "@/components/home";
import SearchScroll from "@/components/SearchScroll"; // ✅ Import Client Component

export default function Page() {
  return (
    <>
      {/* Suspense ensures useSearchParams() works correctly */}
      <Suspense fallback={<div>Loading...</div>}>
        <SearchScroll />
      </Suspense>

      {/* Sections with corresponding IDs */}
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="portfolio">
        <MyPortfolio />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
    </>
  );
}
