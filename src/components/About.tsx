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
            <div className="h-[4px] w-[130px] dark:bg-base-light bg-base-dark"/>
            <div className="h-[4px] w-[4px] dark:bg-base-light bg-base-dark"/>
            <div className="h-[4px] w-[4px] dark:bg-base-light bg-base-dark"/>
            <div className="h-[4px] w-[4px] dark:bg-base-light bg-base-dark"/>
          </div>
        </div>
        <Grid container spacing="40px">
          <Grid item lg={6} md={12} xs={12}>
            <p className="typography-section-title lg:hidden dark:text-base-light text-base-dark">
              I’m enjoys working on apps and always eager to learn new technologies
            </p>
            <p className="typography-section mb:hidden lg:block dark:text-base-light text-base-dark">
              I’m enjoys working on apps and always eager to learn new technologies
            </p>
          </Grid>
          <Grid item lg={6} md={12} xs={12}>
            <p className="typography-desc dark:text-grey-dark text-grey-dark-active md:text-justify lg:text-justify">

              It all began over
              <a className="dark:text-base-light text-base-dark font-medium">
                {" 5 years "}
              </a>
              ago when I was fascinated by the potential of mobile apps
              to make an impact on everyday life. With a background in Android development,
              I dove deep into Kotlin and Android Studio, building my foundation
              in mobile application development.

              <br/>
              <br/>

              Fast-forward to today, I’ve contributed to the development and
              enhancement of multiple mobile apps. My focus has always been on clean architecture,
              performance optimization, skilled in team collaboration, delivering high-quality,
              and results-driven applications that exceed expectations.

              <br/>
              <br/>

              In addition to my work in Android, I’m currently expanding my skill set using Flutter and
              Kotlin Multiplatform. Beyond mobile app development, I’ve also delved into backend development, utilizing
              tools like
              <a className="dark:text-base-light text-base-dark font-medium">{" NodeJS "}</a>
              to build robust and scalable APIs. This allows me to create full-stack solutions, integrating seamless
              backend services with user-friendly mobile interfaces to deliver comprehensive and impactful applications.

            </p>
          </Grid>

        </Grid>
      </WrapperSection>
  );
};

export default About;
