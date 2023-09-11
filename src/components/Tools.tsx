import Grid from "@mui/material/Grid";
import WrapperSection from "./WrapperSection";
import Image from "next/image";

import typescript from "../../public/tools/typescript.png";
import nextjs from "../../public/tools/nextjs.webp";
import react from "../../public/tools/react.png";
import other from "../../public/tools/other.svg";

const Tools = () => {
  return (
    <WrapperSection id="tools">
      <div className="flex flex-col gap-[20px] mt-[20px]">
        <p className="typography-section font-bold dark:text-base-light text-base-dark">
          Tools
        </p>
        <div className="flex flex-row gap-[4px]">
          <div className="h-[4px] w-[130px] dark:bg-base-light bg-base-dark" />
          <div className="h-[4px] w-[4px] dark:bg-base-light bg-base-dark" />
          <div className="h-[4px] w-[4px] dark:bg-base-light bg-base-dark" />
          <div className="h-[4px] w-[4px] dark:bg-base-light bg-base-dark" />
        </div>
      </div>

      <Grid container spacing="40px">
        <Grid item lg={6} md={12}>
          <div className="flex flex-row items-start gap-[20px]">
            <Image height={120} width={120} alt="typescript" src={typescript} />
            <div className="flex flex-col gap-[8px] ">
              <p className="typography-section-title dark:text-base-light text-base-dark">
                Typescript
              </p>
              <p className="typography-desc dark:text-grey-light-active text-base-dark-light ">
                A robust programming language with strict typing to eliminate
                bugs and enhance scalability.
              </p>
            </div>
          </div>
        </Grid>

        <Grid item lg={6} md={12}>
          <div className="flex flex-row items-start gap-[20px]">
            <Image height={120} width={120} alt="nextjs" src={nextjs} />
            <div className="flex flex-col gap-[8px] ">
              <p className="typography-section-title dark:text-base-light text-base-dark">
                Next js
              </p>
              <p className="typography-desc dark:text-grey-light-active text-base-dark-light ">
                Develop full-stack web applications by leveraging the latest
                features in React.js.
              </p>
            </div>
          </div>
        </Grid>

        <Grid item lg={6} md={12}>
          <div className="flex flex-row items-start gap-[20px]">
            <Image height={120} width={120} alt="react" src={react} />
            <div className="flex flex-col gap-[8px] ">
              <p className="typography-section-title dark:text-base-light text-base-dark">
                React
              </p>
              <p className="typography-desc dark:text-grey-light-active text-base-dark-light ">
                Create applications for the web, Android, iOS, and beyond with
                the power of React.
              </p>
            </div>
          </div>
        </Grid>

        <Grid item lg={6} md={12}>
          <div className="flex flex-row items-start gap-[20px]">
            <Image height={120} width={120} alt="other" src={other} />
            <div className="flex flex-col gap-[8px] ">
              <p className="typography-section-title dark:text-base-light text-base-dark">
                Other
              </p>
              <p className="typography-desc dark:text-grey-light-active text-base-dark-light ">
                Other Frontend Technology tools, like React Query, Zustand, PHP,
                Cypress, Storybook, Amplitude, Figma, Tailwind CSS, Material UI,
                and much more.
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </WrapperSection>
  );
};

export default Tools;
