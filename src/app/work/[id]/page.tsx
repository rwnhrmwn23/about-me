"use client";

import { useDarkModeContext } from "@/hooks/DarkModeContex";

import Navigation from "@/components/Navigation";
import ToogleDarkmode from "@/components/ToogleDarkmode";
import WorkDetail from "@/components/WorkDetail";

const WorkDetails = ({ params }: { params: { id: string } }) => {
  const { colorTheme, setTheme } = useDarkModeContext();

  return (
    <div className="flex flex-col dark:bg-base-dark bg-base-light">
      <Navigation colorTheme={colorTheme} withLink={true} />
      <WorkDetail id={params.id} />
      <ToogleDarkmode colorTheme={colorTheme} setTheme={setTheme} />
    </div>
  );
};

export default WorkDetails;
