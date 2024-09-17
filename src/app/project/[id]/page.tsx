"use client";

import Navigation from "@/components/Navigation";
import ToogleDarkmode from "@/components/ToogleDarkmode";
import ProjectDetail from "@/components/ProjectDetail";
import { DarkModeProvider } from "@/hooks/DarkModeContex";

const ProjectDetails = ({ params }: { params: { id: string } }) => {
  let initialTheme;

  if (typeof window !== "undefined") {
    initialTheme = localStorage.getItem("theme") || "dark";
  }

  return (
    <DarkModeProvider initialTheme={initialTheme}>
      <div className="flex flex-col dark:bg-base-dark bg-base-light">
        <Navigation withLink={true} />
        <ProjectDetail id={params.id} />
        <ToogleDarkmode />
      </div>
    </DarkModeProvider>
  );
};

export default ProjectDetails;
