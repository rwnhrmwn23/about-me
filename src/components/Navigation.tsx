import DesktopView from "./navigation/DesktopView";
import MobileView from "./navigation/MobileView";

const navigation = ["home", "about", "tools", "work"];

const Navigation = ({
  colorTheme,
  withLink = false,
}: {
  colorTheme: string;
  withLink?: boolean;
}) => {
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
