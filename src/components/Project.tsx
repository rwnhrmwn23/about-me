"use client";

import Grid from "@mui/material/Grid";
import WrapperSection from "./WrapperSection";
import Image from "next/image";

import Link from "next/link";

import { projects } from "./utils/projects";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <WrapperSection id="Projects">
      <div className="flex flex-col gap-[20px] mt-[20px]">
        <p className="typography-title-mobile lg:hidden dark:text-base-light text-base-dark">
            Projects
        </p>
        <p className="typography-title mb:hidden lg:block dark:text-base-light text-base-dark">
            Projects
        </p>
        <div className="flex flex-row gap-[4px]">
          <div className="h-[4px] w-[130px] dark:bg-base-light bg-base-dark" />
          <div className="h-[4px] w-[4px] dark:bg-base-light bg-base-dark" />
          <div className="h-[4px] w-[4px] dark:bg-base-light bg-base-dark" />
          <div className="h-[4px] w-[4px] dark:bg-base-light bg-base-dark" />
        </div>
      </div>

      <Grid container alignItems="flex-start" spacing="80px">
        {projects?.map((data, idx) => {
          return (
            <Grid
              key={idx}
              item
              container
              lg={6}
              md={12}
              xs={12}
              alignItems="start"
            >
              <Grid item xs={12}>
                <motion.div
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    duration: 1,
                  }}
                  animate={{ opacity: 1 }}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    className="rounded-[8px]"
                    alt={data?.title}
                    src={data?.img}
                    loading="lazy"
                  />
                </motion.div>
              </Grid>
              <Grid item container xs={12} spacing="8px" alignItems="start">
                <Grid item xs={12}>
                  <p className="typography-title !text-[30px] !leading-[40px] dark:text-base-light text-base-dark mt-4">
                    {data?.title}
                  </p>
                </Grid>
                <Grid item xs={12}>
                  <p className="typography-desc dark:text-grey-light-active text-base-dark-light"
                     style={{
                         display: '-webkit-box',
                         WebkitLineClamp: 2,
                         WebkitBoxOrient: 'vertical',
                         overflow: 'hidden',
                         textOverflow: 'ellipsis',
                     }}>
                    {data?.desc}
                  </p>
                </Grid>

                {data?.id && (
                  <Grid item>
                    <Link href={`/project/${data?.id}`}>
                      <div className="flex flex-row py-[8px] pl-[18px] pr-[12px] rounded-[5px] border border-solid dark:border-base-light-active border-base-dark-active cursor-pointer dark:hover:bg-[#ffffff1a] hover:bg-base-light-hover">
                        <p className="typography-desc dark:text-grey-light-active text-base-dark-light">{`See Details   >`}</p>
                      </div>
                    </Link>
                  </Grid>
                )}
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </WrapperSection>
  );
};

export default Project;
