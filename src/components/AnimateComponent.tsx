"use client";

import { motion } from "framer-motion";
import React from "react";

const AnimateComponent = ({
  children,
  style = {},
  customClass = "",
}: {
  children: React.ReactNode;
  style?: any;
  customClass?: string;
}) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ x: 60, opacity: 0 }}
      transition={{
        duration: 1,
      }}
      animate={{ x: 0, opacity: 1 }}
      style={style}
      className={customClass}
    >
      {children}
    </motion.div>
  );
};

export default AnimateComponent;
