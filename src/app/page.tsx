"use client";

import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import ToogleDarkmode from "@/components/ToogleDarkmode";
import About from "@/components/About";
import Tools from "@/components/Tools";
import Footer from "@/components/Footer";
import { DarkModeProvider } from "@/hooks/DarkModeContex";
import Project from "@/components/Project";

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
      <Project />
      <Footer />
      <ToogleDarkmode />
    </div>
  );
}

export default function Home() {
  let initialTheme;

  if (typeof window !== "undefined") {
    initialTheme = localStorage.getItem("theme") || "light";
  }

  return (
    <DarkModeProvider initialTheme={initialTheme || "light"}>
      <Content />
    </DarkModeProvider>
  );
}
