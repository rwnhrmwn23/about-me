import DesktopView from "./navigation/DesktopView";
import MobileView from "./navigation/MobileView";

const navigation = ["about", "tools", "work", "contact"];

const Navigation = ({ colorTheme }: { colorTheme: string }) => {
  return (
    <>
      {/* Desktop */}
      <DesktopView colorTheme={colorTheme} navigation={navigation} />

      {/* Mobile */}
      <MobileView colorTheme={colorTheme} navigation={navigation} />
    </>
  );
};

export default Navigation;
