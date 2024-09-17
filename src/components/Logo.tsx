"use client";

import Image from "next/image";

import logoLight from "../../public/logo-light.svg";
import logoDark from "../../public/logo-dark.svg";

import { motion } from "framer-motion";

const Logo = ({ colorTheme }: { colorTheme: string }) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      transition={{
        duration: 1,
      }}
      animate={{ opacity: 1 }}
    >
      <Image
        key={colorTheme === "light" ? logoDark : logoLight}
        width={40}
        height={40}
        alt="Irw.."
        src={colorTheme === "light" ? logoDark : logoLight}
        loading="lazy"
      />
    </motion.div>
  );
};

export default Logo;
