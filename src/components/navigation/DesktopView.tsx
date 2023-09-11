import React from "react";

import Link from "next/link";
import Logo from "@/components/Logo";

const Email = () => {
  return (
    <div
      className="mx-[18px] p-[10px] rounded-[5px] border border-solid dark:border-base-light-active border-base-dark-active cursor-pointer dark:hover:bg-[#ffffff1a] hover:bg-base-light-hover"
      onClick={() => window.open("mailto:haryarrahman14@gmail.com", "_blank")}
    >
      <p className="typography-h200 dark:text-base-light-active text-base-dark-active uppercase">
        haryarrahman14@gmail.com
      </p>
    </div>
  );
};

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
        <Link href="#">
          <div className="cursor-pointer">
            <Logo colorTheme={colorTheme} />
          </div>
        </Link>
        {navigation?.map((nav, idx) => {
          return (
            <Link key={idx} href={`#${nav}`}>
              <p className="cursor-pointer typography-h200 dark:hover:text-base-light dark:text-base-light-active text-base-dark-active hover:text-base-light-active">
                {nav}
              </p>
            </Link>
          );
        })}
      </div>

      <Email />
    </div>
  );
};

export default DesktopView;
