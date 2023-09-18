import Grid from "@mui/material/Grid";
import WrapperSection from "./WrapperSection";
import Image from "next/image";

import typescript from "../../public/tools/typescript.png";
import nextjs from "../../public/tools/nextjs.webp";
import react from "../../public/tools/react.png";
import other from "../../public/tools/other.svg";

const tools = [
  {
    title: "Typescript",
    desc: "A robust programming language with strict typing to eliminate bugs and enhance scalability.",
    src: typescript,
  },
  {
    title: "Next js",
    desc: "Develop full-stack web applications by leveraging the latest features in React.js.",
    src: nextjs,
  },
  {
    title: "React",
    desc: " Create applications for the web, Android, iOS, and beyond with the power of React.",
    src: react,
  },
  {
    title: "Other",
    desc: "Other Frontend Technology tools, like React Query, Zustand, PHP, Cypress, Storybook, Amplitude, Figma, Tailwind CSS, Material UI, and much more.",
    src: other,
  },
];

const Tools = () => {
  return (
    <WrapperSection id="tools">
      <div className="flex flex-col gap-[20px] mt-[20px]">
        <p className="typography-title-mobile lg:hidden dark:text-base-light text-base-dark">
          Tools
        </p>
        <p className="typography-title mb:hidden lg:block dark:text-base-light text-base-dark">
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
        {tools?.map((e, idx) => {
          return (
            <Grid key={idx} item lg={6} md={12}>
              <div className="flex flex-row items-center gap-[20px]">
                <Image
                  height={120}
                  width={120}
                  alt={e?.title}
                  src={e?.src}
                  className="rounded-[8px]"
                />
                <div className="flex flex-col gap-[8px] ">
                  <p className="typography-title !text-[30px] !leading-[30px] dark:text-base-light text-base-dark">
                    {e?.title}
                  </p>
                  <p className="typography-desc dark:text-grey-light-active text-base-dark-light ">
                    {e?.desc}
                  </p>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </WrapperSection>
  );
};

export default Tools;
