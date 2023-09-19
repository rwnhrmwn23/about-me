import happy5 from "../../../public/work/happy5.svg";
import attendanceadmin from "../../../public/work/attendanceadmin.svg";
import stamping from "../../../public/work/stamping.svg";
import bundledseo from "../../../public/work/bundledseo.svg";
import cateringadmin from "../../../public/work/cateringadmin.svg";
import cateringuser from "../../../public/work/cateringuser.svg";

export const work = [
  {
    id: "happy5",
    title: "Happy5",
    desc: "Performance management platform",
    detail:
      "Happy5 is mobile-first, continuous performance management platform with real-time people data.",
    timeline: "Apr 2021 - Sep 2023",
    tech: [
      "React Js",
      "React Context",
      "React Query",
      "Zustand",
      "Cypress",
      "Storybook",
      "Typescript",
      "Tailwind CSS",
    ],
    img: happy5,
    onClick: () => window.open("https://happy5.co/", "_blank"),
  },
  {
    id: "attendance-admin",
    title: "Attendance Management for Administrator (Japan)",
    desc: "JA / Bulog Attendance Management Platform for Administrator",
    detail:
      "Attendance Management System based on Japan for Administrator Monitoring",
    timeline: "Nov 2022 - Apr 2023",
    tech: [
      "React Js",
      "React Context",
      "React Query",
      "Zustand",
      "Tailwind CSS",
    ],
    img: attendanceadmin,
    onClick: () =>
      window.open("https://attendance-sys.ja-hakui.com/", "_blank"),
  },
  {
    id: "attendance-worker",
    title: "Attendance Stamping for Worker (Japan)",
    desc: "JA / Bulog Attendance Stamping Platform for Worker",
    detail:
      "Attendance Management System based on Japan (Stamping with QR Code) for Worker",
    timeline: "Nov 2022 - Apr 2023",
    tech: [
      "React Js",
      "React Context",
      "React Query",
      "Zustand",
      "Tailwind CSS",
    ],
    img: stamping,
    onClick: () => window.open("https://stamping-sys.ja-hakui.com/", "_blank"),
  },
  {
    id: "bundled-seo",
    title: "BundledSEO Landing Page",
    desc: "Landing page for SEO Tools product",
    detail: "",
    timeline: "Aug 2023",
    tech: ["Next Js", "Tailwind CSS"],
    img: bundledseo,
    onClick: () => window.open("https://bundled-seo.vercel.app/", "_blank"),
  },
  {
    id: "catering-admin",
    title: "Catering Management System Administrator (Japan)",
    desc: "Doi Masaru Catering Management System Platform for Administrator (On Progress)",
    detail:
      "Catering Management System Platform based on Japan for Administrator Monitoring",
    timeline: "Jun 2023 - Sep 2023",
    tech: ["Next Js", "React Context", "React Query", "Zustand", "Material UI"],
    img: cateringadmin,
    // onClick: () => {},
  },
  {
    id: "catering-worker",
    title: "Catering Management System Worker (Japan)",
    desc: "Doi Masaru Catering Management System Platform for Worker (On Progress)",
    detail:
      "Catering Management System Platform based on Japan for Customer Order",
    timeline: "Jun 2023 - Sep 2023",
    tech: ["Next Js", "React Context", "React Query", "Zustand", "Material UI"],
    img: cateringuser,
    // onClick: () => {},
  },
];
