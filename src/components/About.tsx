import React from "react";
import Grid from "@mui/material/Grid";
import WrapperSection from "./WrapperSection";

const About = () => {
  return (
    <WrapperSection id="about">
      <div className="h-[8px] w-[200px] dark:bg-base-light bg-base-dark" />
      <Grid container spacing="40px">
        <Grid item lg={6} md={12} xs={12}>
          <p className="typography-title-mobile lg:hidden dark:text-base-light text-base-dark">
            I love to researching and analyzing about frontend technology.
          </p>
          <p className="typography-title mb:hidden lg:block dark:text-base-light text-base-dark">
            I love to researching and analyzing about frontend technology.
          </p>
        </Grid>
        <Grid item lg={6} md={12} xs={12}>
          <p className="typography-desc dark:text-grey-dark text-grey-dark-active">
            <a className="dark:text-base-light text-base-dark font-medium">
              {`I'm a Software Engineer with 3+ years of experience, specializing
              in frontend technologies.`}
            </a>{" "}
            {`I'm based in Jakarta and have a strong interest in exploring new
            frontend`}{" "}
            <a
              href="#tools"
              className="dark:text-base-light text-base-dark font-medium"
            >
              Tech Stack
            </a>{" "}
            like React JS, Next JS, Typescript, Javascript, Vue JS, and Nuxt JS.
            I often dedicate hours each day to create mini-projects for testing
            the efficiency of these technologies.
            <br />
            <br />
            You can check out some of{" "}
            <a
              href=""
              className="dark:text-base-light text-base-dark font-medium"
            >
              My Work
            </a>{" "}
            {`below. I'm passionate about research, analysis, refactoring, and
            ensuring code scalability and quality. I take immense pride in my
            work and have a deep love for the code I create.`}
            <br />
            <br />{" "}
            <a className="dark:text-base-light text-base-dark font-medium">
              My primary focus is on building highly scalable web applications.
            </a>{" "}
            I begin by creating a well-defined Design System in Figma and
            seamlessly integrate it into the codebase, always prioritizing
            performance optimization.
            <br />
            <br />I thoroughly enjoy crafting various helper codes to assist my
            team and streamline our development efforts. If you have any
            questions or would like to discuss these topics, please feel free to
            reach out to me on{" "}
            <a
              href="https://www.linkedin.com/in/hary-arrahman"
              target="_blank"
              className="dark:text-base-light text-base-dark font-medium"
            >
              LinkedIn.
            </a>{" "}
            {`I'd be happy to answer them.`}
          </p>
        </Grid>
      </Grid>
    </WrapperSection>
  );
};

export default About;
