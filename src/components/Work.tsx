import Grid from "@mui/material/Grid";
import WrapperSection from "./WrapperSection";
import Image from "next/image";

import happy5 from "../../public/work/happy5.svg";
import attendanceadmin from "../../public/work/attendanceadmin.svg";
import stamping from "../../public/work/stamping.svg";
import bundledseo from "../../public/work/bundledseo.svg";
import cateringadmin from "../../public/work/cateringadmin.svg";
import cateringuser from "../../public/work/cateringuser.svg";

const work = [
  {
    title: "Happy5",
    desc: "Performance management platform",
    img: happy5,
    onClick: () => {},
  },
  {
    title: "Attendance Management for Administrator (Japan)",
    desc: "JA / Bulog Attendance Management Platform for Administrator",
    img: attendanceadmin,
    onClick: () => {},
  },
  {
    title: "Attendance Stamping for Worker (Japan)",
    desc: "JA / Bulog Attendance Stamping Platform for Worker",
    img: stamping,
    onClick: () => {},
  },
  {
    title: "BundledSEO Landing Page",
    desc: "Landing page for SEO Tools product",
    img: bundledseo,
    onClick: () => {},
  },
  {
    title: "Catering Management System Administrator (Japan)",
    desc: "Doi Masaru Catering Management System Platform for Administrator (On Progress)",
    img: cateringadmin,
    onClick: () => {},
  },
  {
    title: "Catering Management System Worker (Japan)",
    desc: "Doi Masaru Catering Management System Platform for Worker (On Progress)",
    img: cateringuser,
    onClick: () => {},
  },
];

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

      <Grid container spacing="80px">
        {work?.map((data, idx) => {
          return (
            <Grid
              key={idx}
              item
              container
              lg={6}
              md={12}
              xs={12}
              spacing="30px"
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
              <Grid item container xs={12} spacing="8px" alignItems="start">
                <Grid
                  item
                  container
                  xs={12}
                  alignItems="center"
                  spacing="8px"
                  justifyContent="space-between"
                >
                  <Grid item xs={12}>
                    <p className="typography-title !text-[30px] !leading-[40px] dark:text-base-light text-base-dark">
                      {data?.title}
                    </p>
                  </Grid>
                  {/* <Grid item>
                    <div
                      className="p-[10px] rounded-[5px] border border-solid dark:border-base-light-active border-base-dark-active cursor-pointer dark:hover:bg-[#ffffff1a] hover:bg-base-light-hover"
                      onClick={data?.onClick}
                    >
                      <p className="typography-desc dark:text-grey-light-active text-base-dark-light">{`See Details   >`}</p>
                    </div>
                  </Grid> */}
                </Grid>
                <Grid item xs={12}>
                  <p className="typography-desc dark:text-grey-light-active text-base-dark-light">
                    {data?.desc}
                  </p>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </WrapperSection>
  );
};

export default Work;
