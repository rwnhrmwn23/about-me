"use client";

import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import ToogleDarkmode from "@/components/ToogleDarkmode";
import About from "@/components/About";
import Tools from "@/components/Tools";
import Work from "@/components/Work";
import Footer from "@/components/Footer";
import { DarkModeProvider } from "@/hooks/DarkModeContex";

function Content() {
  return (
    <div
      id="Home"
      className="flex flex-col gap-[40px] dark:bg-base-dark bg-base-light"
    >
      <Navigation />
      <Hero />
      <About />
      <Tools />
      <Work />
      <Footer />
      <ToogleDarkmode />
    </div>
  );
}

export default function Home() {
  let initialTheme;

  if (typeof window !== "undefined") {
    initialTheme = localStorage.getItem("theme") || "dark";
  }

  return (
    <DarkModeProvider initialTheme={initialTheme || "dark"}>
      <Content />
    </DarkModeProvider>
  );
}
