import { useState } from "react";

import Link from "next/link";
import Logo from "@/components/Logo";

import SidebarIcon from "./SidebarIcon";

import { motion } from "framer-motion";

const MobileView = ({
  colorTheme,
  navigation,
}: {
  colorTheme: string;
  navigation: string[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="sticky top-0 h-[100px] px-[30px] py-[42px] items-center justify-between dark:bg-base-dark bg-base-light z-10 mb:flex sm:flex md:flex lg:hidden xl:hidden">
        <Link href="#">
          <div className="cursor-pointer">
            <Logo colorTheme={colorTheme} />
          </div>
        </Link>
        <div
          className="w-[30px] h-[30px] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <SidebarIcon colorTheme={colorTheme} isOpen={isOpen} />
        </div>
      </div>

      <motion.div
        className="fixed w-screen h-screen top-0 z-[1001] flex flex-col items-center flex-1 dark:bg-base-dark bg-base-light"
        initial={{
          right: isOpen ? "-100vw" : 0,
        }}
        animate={{
          right: isOpen ? 0 : "-100vw",
        }}
        transition={{
          ease: "linear",
          duration: 0.3,
        }}
      >
        <div className="w-screen h-screen flex flex-col items-end px-[30px] py-[42px]">
          <div className="w-full flex justify-between items-center mb-[40px]">
            <Link href="#">
              <div className="cursor-pointer">
                <Logo colorTheme={colorTheme} />
              </div>
            </Link>
            <div
              className="w-[30px] h-[30px] cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <SidebarIcon colorTheme={colorTheme} isOpen={isOpen} />
            </div>
          </div>

          <div className="w-full">
            {navigation?.map((nav, idx) => {
              return (
                <div key={idx} className="flex items-center h-[80px]">
                  <Link href={`#${nav}`} onClick={() => setIsOpen(!isOpen)}>
                    <p className="cursor-pointer typography-section-title dark:hover:text-base-light dark:text-base-light-active text-base-dark-active hover:text-base-light-active">
                      {nav}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MobileView;
