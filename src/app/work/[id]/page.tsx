"use client";

import Navigation from "@/components/Navigation";
import ToogleDarkmode from "@/components/ToogleDarkmode";
import WorkDetail from "@/components/WorkDetail";
import { DarkModeProvider } from "@/hooks/DarkModeContex";

const WorkDetails = ({ params }: { params: { id: string } }) => {
  let initialTheme;

  if (typeof window !== "undefined") {
    initialTheme = localStorage.getItem("theme") || "dark";
  }

  return (
    <DarkModeProvider initialTheme={initialTheme}>
      <div className="flex flex-col dark:bg-base-dark bg-base-light">
        <Navigation withLink={true} />
        <WorkDetail id={params.id} />
        <ToogleDarkmode />
      </div>
    </DarkModeProvider>
  );
};

export default WorkDetails;
