"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Grid } from "@mui/material";
import { projects } from "./utils/projects";
import { useDarkModeContext } from "@/hooks/DarkModeContex";

import WrapperSection from "./WrapperSection";

import paperdark from "../../public/social-media/paper-dark.svg";
import paperlight from "../../public/social-media/paper-light.svg";
import AnimateComponent from "./AnimateComponent";

const ProjectDetail = ({ id }: { id: string }) => {
  const router = useRouter();

  const data = projects?.find((e) => e?.id == id);
  const dataIdx = projects?.findIndex((e) => e?.id == id);

  const { colorTheme } = useDarkModeContext();

  return (
      <WrapperSection>
        <Grid container spacing="20px">
          {/* Image Section */}
          <Grid item container xs={12} justifyContent="center">
            <Grid item xs={10}>
              <AnimateComponent>
                <Image
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    className="rounded-[8px]"
                    alt={data?.title || ""}
                    src={data?.img || ""}
                    loading="lazy"
                />
              </AnimateComponent>
            </Grid>
          </Grid>

          {/* Title Section */}
          <Grid item container xs={12} className="mb:gap-[20px] lg:gap-[40px]">
            <Grid item xs={12} className="mb:mt-[20px] lg:mt-[40px]">
              <AnimateComponent>
                <p className="typography-title-mobile lg:hidden !leading-[60px] dark:text-base-light text-base-dark">
                  {data?.title}
                </p>
                <p className="typography-title mb:hidden lg:block lg:!leading-[110px] dark:text-base-light text-base-dark">
                  {data?.title}
                </p>
              </AnimateComponent>
            </Grid>

            {/* Horizontal Line */}
            <Grid item xs={12}>
              <AnimateComponent>
                <div className="h-[4px] w-[200px] dark:bg-base-light bg-base-dark" />
              </AnimateComponent>
            </Grid>
          </Grid>

          {/* Desc and Detail Section with same width */}
          <Grid item container xs={12} spacing="10px">
            <Grid item xs={12} lg={8}>
              <AnimateComponent>
                <p className="typography-desc dark:text-grey-light-active text-base-dark-light text-justify">
                  {data?.desc}
                </p>
                <br/>
                <p className="typography-desc dark:text-grey-light-active text-base-dark-light text-justify"
                    dangerouslySetInnerHTML={{__html: data?.detail || ""}}
                />
              </AnimateComponent>
            </Grid>
          </Grid>

          {/* Visit Website */}
          {data?.onClick && (
              <Grid item>
                <div onClick={data?.onClick}>
                  <AnimateComponent>
                    <div className="flex flex-row items-center py-[4px] pl-[8px] pr-[6px] rounded-[5px] border border-solid dark:border-base-light-active border-base-dark-active cursor-pointer dark:hover:bg-[#ffffff1a] hover:bg-base-light-hover">
                      <p className="typography-desc dark:text-grey-light-active text-base-dark-light">
                        Visit Website
                      </p>
                      <Image
                          style={{
                            height: "18px",
                          }}
                          alt="website-link"
                          src={colorTheme == "light" ? paperlight : paperdark}
                      />
                    </div>
                  </AnimateComponent>
                </div>
              </Grid>
          )}

          {/* Decorative Divider */}
          <Grid item xs={12}>
            <AnimateComponent>
              <div className="flex flex-row gap-[4px]">
                <div className="h-[4px] w-[130px] dark:bg-base-light bg-base-dark" />
                <div className="h-[4px] w-[4px] dark:bg-base-light bg-base-dark" />
                <div className="h-[4px] w-[4px] dark:bg-base-light bg-base-dark" />
                <div className="h-[4px] w-[4px] dark:bg-base-light bg-base-dark" />
              </div>
            </AnimateComponent>
          </Grid>

          {/* Timeline Section */}
          <Grid item container xs={12} spacing="10px">
            <Grid item container xs={12}>
              <Grid item lg={1.5} md={1.5} xs={3.5}>
                <AnimateComponent>
                  <p className="typography-desc dark:text-base-light text-base-dark font-bold">
                    Timeline
                  </p>
                </AnimateComponent>
              </Grid>
              <Grid item>
                <AnimateComponent>
                  <p className="typography-desc dark:text-base-light text-base-dark font-bold">
                    : {data?.timeline}
                  </p>
                </AnimateComponent>
              </Grid>
            </Grid>
          </Grid>

          {/* Tech Stack Section */}
          <Grid item container xs={12} spacing="10px">
            <Grid item container xs={12}>
              <Grid item lg={1.5} md={1.5} xs={3.5}>
                <AnimateComponent>
                  <p className="typography-desc dark:text-base-light text-base-dark font-bold">
                    Tech Stack
                  </p>
                </AnimateComponent>
              </Grid>
            </Grid>

            <Grid item container lg={8} md={10} xs={12} spacing="10px">
              {data?.tech?.map((tech, idx) => (
                  <Grid key={idx} item>
                    <AnimateComponent>
                      <div className="flex flex-row py-[4px] px-[8px] rounded-[5px] border border-solid dark:border-base-light-active border-base-dark-active cursor-pointer dark:hover:bg-[#ffffff1a] hover:bg-base-light-hover">
                        <p className="typography-desc dark:text-grey-light-active text-base-dark-light">
                          {tech}
                        </p>
                      </div>
                    </AnimateComponent>
                  </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Pagination Section */}
          <Grid
              item
              container
              xs={12}
              justifyContent="center"
              spacing="40px"
              marginTop="20px"
          >
            <Grid item container xs={12} justifyContent="center">
              <Grid item>
                <div className="flex flex-row gap-[4px]">
                  <div className="h-[4px] w-[4px] dark:bg-base-light bg-base-dark" />
                  <div className="h-[4px] w-[4px] dark:bg-base-light bg-base-dark" />
                  <div className="h-[4px] w-[60px] dark:bg-base-light bg-base-dark" />
                  <div className="h-[4px] w-[4px] dark:bg-base-light bg-base-dark" />
                  <div className="h-[4px] w-[60px] dark:bg-base-light bg-base-dark" />
                  <div className="h-[4px] w-[4px] dark:bg-base-light bg-base-dark" />
                  <div className="h-[4px] w-[4px] dark:bg-base-light bg-base-dark" />
                  <div className="h-[4px] w-[4px] dark:bg-base-light bg-base-dark" />
                </div>
              </Grid>
            </Grid>

            <Grid item container xs={12} justifyContent="center" spacing="20px">
              <Grid item lg={5} md={6} xs={6}>
                <div
                    className="h-full flex flex-col py-[12px] pl-[18px] pr-[12px] rounded-[5px] border border-solid dark:border-base-light-active border-base-dark-active dark:hover:bg-[#ffffff1a] hover:bg-base-light-hover cursor-pointer"
                    onClick={() =>
                        projects[dataIdx - 1]?.id
                            ? router.push(`/project/${projects[dataIdx - 1]?.id}`)
                            : router.push(`/project/${projects[projects?.length - 1]?.id}`)
                    }
                >
                  <p className="typography-desc dark:text-grey-light-active text-base-dark-light text-right">
                    {"<"} Previous
                  </p>
                  <p className="typography-desc dark:text-grey-light-active text-base-dark-light text-right">
                    {projects[dataIdx - 1]?.title
                        ? projects[dataIdx - 1]?.title
                        : projects[projects?.length - 1]?.title}
                  </p>
                </div>
              </Grid>

              <Grid item lg={5} md={6} xs={6}>
                <div
                    className="h-full flex flex-col py-[12px] pl-[18px] pr-[12px] rounded-[5px] border border-solid dark:border-base-light-active border-base-dark-active dark:hover:bg-[#ffffff1a] hover:bg-base-light-hover cursor-pointer"
                    onClick={() =>
                        projects[dataIdx + 1]?.id
                            ? router.push(`/project/${projects[dataIdx + 1]?.id}`)
                            : router.push(`/project/${projects[0]?.id}`)
                    }
                >
                  <p className="typography-desc dark:text-grey-light-active text-base-dark-light">
                    Next {">"}
                  </p>
                  <p className="typography-desc dark:text-grey-light-active text-base-dark-light ">
                    {projects[dataIdx + 1]?.title
                        ? projects[dataIdx + 1]?.title
                        : projects[0]?.title}
                  </p>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </WrapperSection>
  );
};

export default ProjectDetail;
