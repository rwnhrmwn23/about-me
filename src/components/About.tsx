import React from "react";
import Grid from "@mui/material/Grid";
import WrapperSection from "./WrapperSection";
import ScrollLink from "@/components/ScrollLink";

const About = () => {
  return (
    <WrapperSection id="About">
      <div className="h-[8px] w-[200px] dark:bg-base-light bg-base-dark" />
      <Grid container spacing="40px">
        <Grid item lg={6} md={12} xs={12}>
          <p className="typography-title-mobile lg:hidden dark:text-base-light text-base-dark">
            I’m enjoys working on apps and always eager to adopt new technologies
          </p>
          <p className="typography-title mb:hidden lg:block dark:text-base-light text-base-dark">
            I’m enjoys working on apps and always eager to adopt new technologies
          </p>
        </Grid>
        <Grid item lg={6} md={12} xs={12}>
          <p className="typography-desc dark:text-grey-dark text-grey-dark-active text-justify">

            <a className="dark:text-base-light text-base-dark font-medium">
              {`I'm a Mobile Developer `}
            </a>

            with 5+ years of hands-on experience
            in designing, implementing, testing, and maintaining
            cutting-edge mobile applications.

            <br/>
            <br/>

            {`Eager to embrace new technologies and continuously learn in mobile app development. 
            Skilled in team collaboration and delivering high-quality, results-driven applications 
            that exceed expectations.`}

            <br/>
            <br/>

            <ScrollLink href="#Tools" className="dark:text-base-light text-base-dark font-medium">
              My Stacks
            </ScrollLink>{" "}

            includes Kotlin, Jetpack Compose, Android Jetpack, Firebase, Google APIs, and more.
            I dedicate time daily to exploring new tools and currently diving into Kotlin Multiplatform
            and Flutter to create cross-platform apps for Android and iOS.

            <br/>
            <br/>
            You can check out some of{" "}

            <ScrollLink href="#Work" className="dark:text-base-light text-base-dark font-medium">
              My Works
            </ScrollLink>
           {" "}

            {`below. I'm driven by a passion for slicing ui design, research, analysis, and refactoring,
             with focused on delivering scalable and high-quality code. I take great pride in my work and 
             have a deep appreciation for the code I craft.`}

          </p>
        </Grid>
      </Grid>
    </WrapperSection>
  );
};

export default About;
