"use client";

import React, { createContext, useContext, ReactNode } from "react";
import useDarkMode from "./useDarkTheme";

interface DarkModeContextType {
  colorTheme: string;
  setTheme: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

export const DarkModeProvider = ({
  initialTheme = "light",
  children,
}: {
  initialTheme?: string;
  children: ReactNode;
}) => {
  const [colorTheme, setTheme]: any = useDarkMode(initialTheme);

  return (
    <DarkModeContext.Provider value={{ colorTheme, setTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkModeContext = (): DarkModeContextType => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error(
      "useDarkModeContext must be used within a DarkModeProvider"
    );
  }
  return context;
};
