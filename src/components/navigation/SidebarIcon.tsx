import Image from "next/image";

import burgerdark from "../../../public/icon/burger-dark.svg";
import burgerlight from "../../../public/icon/burger-light.svg";

import closedark from "../../../public/icon/close-dark.svg";
import closelight from "../../../public/icon/close-light.svg";

const SidebarIcon = ({
  colorTheme,
  isOpen,
}: {
  colorTheme: string;
  isOpen: boolean;
}) => {
  const logo: any = {
    light: isOpen ? closelight : burgerlight,
    dark: isOpen ? closedark : burgerdark,
  };

  return <Image key={logo[colorTheme]} alt="Har.." src={logo[colorTheme]} />;
};

export default SidebarIcon;
