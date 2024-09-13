import React from "react";
import Grid from "@mui/material/Grid";
import WrapperSection from "./WrapperSection";

const About = () => {
  return (
    <WrapperSection id="About">
      <div className="h-[8px] w-[200px] dark:bg-base-light bg-base-dark" />
      <Grid container spacing="40px">
        <Grid item lg={6} md={12} xs={12}>
          <p className="typography-title-mobile lg:hidden dark:text-base-light text-base-dark">
            I’m a mobile developer who loves creating apps and eager adopt new technologies.
          </p>
          <p className="typography-title mb:hidden lg:block dark:text-base-light text-base-dark">
            I’m a mobile developer who loves creating apps and eager adopt new technologies.
          </p>
        </Grid>
        <Grid item lg={6} md={12} xs={12}>
          <p className="typography-desc dark:text-grey-dark text-grey-dark-active">

            <a className="dark:text-base-light text-base-dark font-medium">
              {`I'm Android Developer with 5+ years of hands-on experience 
              in designing, implementing, testing, and maintaining 
              cutting-edge mobile applications.`}
            </a>

            <br/>
            <br/>

            {`Eager to embrace emerging technologies and always ready 
            to learn new things in the ever-evolving mobile app development landscape. 
            Adept at collaborating with cross-functional teams to drive project success. 
            Proven track record in delivering quality applications that are result-oriented 
            and exceed expectations.`}

            <br/>
            <br/>

            <a
                href="#Tools"
                className="dark:text-base-light text-base-dark font-medium"
            >
              My Stack
            </a>{" "}

            includes Kotlin, Jetpack Compose, Android Jetpack, Firebase, Google Maps API, and more.
            I dedicate time daily to exploring new tools and currently diving into Kotlin Compose Multiplatform
            and Flutter to create cross-platform apps for Android and iOS.

            <br/>
            <br/>
            You can check out some of{" "}
            <a
                href="#Work"
                className="dark:text-base-light text-base-dark font-medium"
            >
              My Work
            </a>{" "}

            {`below. I'm driven by a passion for slicing ui design, research, analysis, and refactoring,
             with always focused on delivering scalable and high-quality code. I take great pride in my work and 
             have a deep appreciation for the code I craft.`}

          </p>
        </Grid>
      </Grid>
    </WrapperSection>
  );
};

export default About;
