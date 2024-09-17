"use client";

import { useDarkModeContext } from "@/hooks/DarkModeContex";
import DesktopView from "./navigation/DesktopView";
import MobileView from "./navigation/MobileView";

const navigation = ["Home", "About", "Tools", "Projects"];

const Navigation = ({ withLink = false }: { withLink?: boolean }) => {
  const { colorTheme } = useDarkModeContext();

  return (
    <>
      {/* Desktop */}
      <DesktopView
        colorTheme={colorTheme}
        navigation={navigation}
        withLink={withLink}
      />

      {/* Mobile */}
      <MobileView
        colorTheme={colorTheme}
        navigation={navigation}
        withLink={withLink}
      />
    </>
  );
};

export default Navigation;
