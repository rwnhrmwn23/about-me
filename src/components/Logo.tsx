import Image from "next/image";

import logoLight from "../../public/logo-light.svg";
import logoDark from "../../public/logo-dark.svg";

const Logo = ({ colorTheme }: { colorTheme: string }) => {
  return (
    <Image
      key={colorTheme === "light" ? logoDark : logoLight}
      width={40}
      height={40}
      alt="Har.."
      src={colorTheme === "light" ? logoDark : logoLight}
    />
  );
};

export default Logo;
