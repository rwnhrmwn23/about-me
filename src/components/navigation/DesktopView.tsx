import React from "react";

import Logo from "@/components/Logo";
import SocialMedia from "@/components/SocialMedia";
import ScrollLink from "../ScrollLink";

const DesktopView = ({
  colorTheme,
  navigation,
}: {
  colorTheme: string;
  navigation: string[];
}) => {
  return (
    <div className="sticky top-0 h-[100px] p-[12px] items-center justify-between dark:bg-base-dark bg-base-light z-10 mb:hidden sm:hidden md:hidden lg:flex xl:flex">
      <div className="flex flex-row items-center gap-[40px] px-[18px] py-[30px]">
        <ScrollLink href="/#home">
          <div className="cursor-pointer">
            <Logo colorTheme={colorTheme} />
          </div>
        </ScrollLink>
        {navigation?.map((nav, idx) => {
          return (
            <ScrollLink key={idx} href={`/#${nav}`}>
              <p className="cursor-pointer typography-h200 dark:hover:text-base-light dark:text-base-light-active text-base-dark-active hover:text-base-light-active">
                {nav}
              </p>
            </ScrollLink>
          );
        })}
      </div>

      <div className="px-[18px] py-[30px]">
        <SocialMedia colorTheme={colorTheme} />
      </div>
    </div>
  );
};

export default DesktopView;
