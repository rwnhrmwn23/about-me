import { useRef, useState } from "react";

import Link from "next/link";
import Logo from "@/components/Logo";

import SidebarIcon from "./SidebarIcon";

import { motion } from "framer-motion";
import SocialMedia from "../SocialMedia";
import ScrollLink from "../ScrollLink";

const MobileView = ({
  colorTheme,
  navigation,
  withLink,
}: {
  colorTheme: string;
  navigation: string[];
  withLink?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const LinkComponent = withLink ? Link : ScrollLink;
  return (
    <>
      <div className="sticky top-0 h-[100px] px-[30px] py-[42px] items-center justify-between dark:bg-base-dark bg-base-light z-10 mb:flex sm:flex md:flex lg:hidden xl:hidden">
        <LinkComponent href="/#home">
          <div className="cursor-pointer">
            <Logo colorTheme={colorTheme} />
          </div>
        </LinkComponent>
        <div
          className="w-[30px] h-[30px] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <SidebarIcon colorTheme={colorTheme} isOpen={isOpen} />
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="fixed w-screen h-screen top-0 z-[1001] flex flex-col items-center flex-1 dark:bg-base-dark bg-base-light"
          initial={{
            right: "-100vw",
          }}
          animate={{
            right: 0,
          }}
          transition={{
            ease: "linear",
            duration: 0.3,
          }}
        >
          <div className="w-screen h-screen flex flex-col items-end px-[30px] py-[42px]">
            <div className="w-full flex justify-between items-center mb-[40px]">
              <LinkComponent href="/#home">
                <div className="cursor-pointer">
                  <Logo colorTheme={colorTheme} />
                </div>
              </LinkComponent>

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
                  <LinkComponent
                    key={idx}
                    href={`/#${nav}`}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <div key={idx} className="flex items-center h-[80px]">
                      <p className="cursor-pointer typography-section-title dark:hover:text-base-light dark:text-base-light-active text-base-dark-active hover:text-base-light-active">
                        {nav}
                      </p>
                    </div>
                  </LinkComponent>
                );
              })}

              <div className="flex items-center h-[80px]">
                <SocialMedia colorTheme={colorTheme} />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default MobileView;
