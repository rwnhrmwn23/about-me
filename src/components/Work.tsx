import Grid from "@mui/material/Grid";
import WrapperSection from "./WrapperSection";
import Image from "next/image";

import Link from "next/link";

import { work } from "./utils/work";

const Work = () => {
  return (
    <WrapperSection id="work">
      <div className="flex flex-col gap-[20px] mt-[20px]">
        <p className="typography-title-mobile lg:hidden dark:text-base-light text-base-dark">
          Work
        </p>
        <p className="typography-title mb:hidden lg:block dark:text-base-light text-base-dark">
          Work
        </p>
        <div className="flex flex-row gap-[4px]">
          <div className="h-[4px] w-[130px] dark:bg-base-light bg-base-dark" />
          <div className="h-[4px] w-[4px] dark:bg-base-light bg-base-dark" />
          <div className="h-[4px] w-[4px] dark:bg-base-light bg-base-dark" />
          <div className="h-[4px] w-[4px] dark:bg-base-light bg-base-dark" />
        </div>
      </div>

      <Grid container alignItems="flex-start" spacing="80px">
        {work?.map((data, idx) => {
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
                <Image
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  className="rounded-[8px]"
                  alt={data?.title}
                  src={data?.img}
                />
              </Grid>
              <Grid item container xs={12} spacing="16px" alignItems="start">
                <Grid item xs={12}>
                  <p className="typography-title !text-[30px] !leading-[40px] dark:text-base-light text-base-dark">
                    {data?.title}
                  </p>
                </Grid>
                <Grid item xs={12}>
                  <p className="typography-desc dark:text-grey-light-active text-base-dark-light">
                    {data?.desc}
                  </p>
                </Grid>

                {data?.id && (
                  <Grid item>
                    <Link href={`/work/${data?.id}`}>
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

export default Work;
