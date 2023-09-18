import Link from "next/link";
import Image from "next/image";

import linkedindark from "../../public/social-media/linkedin-dark.svg";
import linkedinlight from "../../public/social-media/linkedin-light.svg";
import emaildark from "../../public/social-media/email-dark.svg";
import emaillight from "../../public/social-media/email-light.svg";
import paperdark from "../../public/social-media/paper-dark.svg";
import paperlight from "../../public/social-media/paper-light.svg";

import Particle from "./Particles";
import { Grid } from "@mui/material";

const Hero = ({ colorTheme }: { colorTheme: string }) => {
  return (
    <div
      id=""
      className="relative flex justify-center items-center h-[calc(100vh-100px)] "
    >
      <Particle colorTheme={colorTheme} />
      <div className="absolute flex flex-col  items-center z-2 max-w-[1140px] mb:px-[16px] lg:px-[60px] ">
        <div className="flex flex-col items-start mb:gap-[20px] lg:gap-[40px]">
          <div>
            <p className="mt-[-150px] typography-hello-mobile lg:hidden dark:text-base-light text-base-dark">
              Hary Arrahman, Frontend Web Developer
            </p>
            <p className="mt-[-150px] typography-hello mb:hidden lg:block dark:text-base-light text-base-dark">
              Hary Arrahman, Frontend Web Developer
            </p>
          </div>

          <Grid container spacing="20px">
            <Grid item lg={3} md={12} xs={12}>
              <div className="flex flex-row items-end gap-[8px]">
                <Image
                  style={{
                    height: "18px",
                  }}
                  alt="gmail"
                  src={colorTheme == "light" ? emaillight : emaildark}
                />
                <p
                  className="typography-h200 dark:hover:text-base-light dark:text-base-light-active text-base-dark-active hover:text-base-light-active  cursor-pointer"
                  onClick={() =>
                    window.open("mailto:haryarrahman14@gmail.com", "_blank")
                  }
                >
                  haryarrahman14@gmail.com
                </p>
              </div>
            </Grid>

            <Grid item lg={3} md={12} xs={12}>
              <div className="flex flex-row items-end gap-[8px]">
                <Image
                  style={{
                    height: "18px",
                  }}
                  alt="linkedin"
                  src={colorTheme == "light" ? linkedinlight : linkedindark}
                />
                <p
                  className="typography-h200 dark:hover:text-base-light dark:text-base-light-active text-base-dark-active hover:text-base-light-active cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/hary-arrahman",
                      "_blank"
                    )
                  }
                >
                  hary-arrahman
                </p>
              </div>
            </Grid>
          </Grid>

          <a
            href="#work"
            className="flex flex-row py-[12px] pl-[18px] pr-[12px] rounded-[5px] border border-solid dark:border-base-light-active border-base-dark-active cursor-pointer dark:hover:bg-[#ffffff1a] hover:bg-base-light-hover"
          >
            <p className="typography-title !text-[18px] !leading-[18px] dark:text-base-light-active text-base-dark-active">
              View Work
            </p>
            <Image
              style={{
                height: "18px",
              }}
              alt="linkedin"
              src={colorTheme == "light" ? paperlight : paperdark}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
