import React from "react";
import Grid from "@mui/material/Grid";
import WrapperSection from "./WrapperSection";

const About = () => {
  return (
      <WrapperSection id="About">
        <div className="flex flex-col gap-[20px] mt-[20px]">
          <p className="typography-title-mobile lg:hidden dark:text-base-light text-base-dark">
            About
          </p>
          <p className="typography-title mb:hidden lg:block dark:text-base-light text-base-dark">
            About
          </p>
          <div className="flex flex-row gap-[4px]">
            <div className="h-[4px] w-[130px] dark:bg-base-light bg-base-dark" />
            <div className="h-[4px] w-[4px] dark:bg-base-light bg-base-dark" />
            <div className="h-[4px] w-[4px] dark:bg-base-light bg-base-dark" />
            <div className="h-[4px] w-[4px] dark:bg-base-light bg-base-dark" />
          </div>
        </div>
        <Grid container spacing="40px">
          <Grid item lg={6} md={12} xs={12}>
            <p className="typography-section-title text-base lg:hidden dark:text-base-light text-base-dark">
              Passionate about building mobile apps and staying ahead with modern tools
            </p>
            <p className="typography-section mb:hidden lg:block dark:text-base-light text-base-dark">
              Passionate about building mobile apps and staying ahead with modern tools
            </p>
          </Grid>
          <Grid item lg={6} md={12} xs={12}>
            <p className="typography-desc dark:text-grey-dark text-grey-dark-active md:text-justify lg:text-justify">
              My journey in mobile development began over
              <a className="dark:text-base-light text-base-dark font-medium">
                {" 5 years "}
              </a>
              ago with a passion for building apps that solve real problems.
              Starting from Android native with Kotlin, I’ve built and contributed to various mobile applications
              focused on performance, clean architecture, and great user experience.

              <br />
              <br />

              Today, I’m advancing my mobile development skills with Flutter and Kotlin Multiplatform, enabling me
              to deliver high-quality apps for both Android and iOS. I focus on writing maintainable code,
              collaborating effectively, and staying current with modern tools and best practices.
            </p>
          </Grid>
        </Grid>
      </WrapperSection>
  );
};

export default About;
