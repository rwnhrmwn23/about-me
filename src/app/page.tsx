"use client";

import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import ToogleDarkmode from "@/components/ToogleDarkmode";
import About from "@/components/About";
import Tools from "@/components/Tools";
import Work from "@/components/Work";
import Footer from "@/components/Footer";
import { useDarkModeContext } from "@/hooks/DarkModeContex";

export default function Home() {
  const { colorTheme, setTheme } = useDarkModeContext();

  return (
    <div
      id="home"
      className="flex flex-col gap-[40px] dark:bg-base-dark bg-base-light"
    >
      <Navigation colorTheme={colorTheme} />
      <Hero colorTheme={colorTheme} />
      <About />
      <Tools />
      <Work />
      <Footer colorTheme={colorTheme} />
      <ToogleDarkmode colorTheme={colorTheme} setTheme={setTheme} />
    </div>
  );
}
