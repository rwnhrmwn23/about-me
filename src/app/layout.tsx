"use client";

import Head from "next/head";
import "./globals.scss";
import { Poppins } from "next/font/google";
import logodark from "../../public/logo-dark.svg";
import { DarkModeProvider } from "@/hooks/DarkModeContex";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const title = "Hary Arrahman | Software Engineer";
  const description =
    "Hary Arrahman is a passionate software engineer specializing in Next Js, React Js, React, Vue Js, Nuxt Js and TypeScript based in Jakarta, Indonesia. Hire Hary for Web app development";
  const url = "https://haryarrahman.vercel.app/";

  return (
    <html lang="en">
      <Head>
        <meta name="theme-color" content="#0e0e0e" />
        <meta name="msapplication-navbutton-color" content="#0e0e0e" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#0e0e0e" />

        <title>{title}</title>

        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={logodark} />
        <meta property="og:url" content={url} />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={logodark} />
        <meta name="twitter:card" content={logodark} />
      </Head>

      <body className={poppins.className}>
        <DarkModeProvider>{children}</DarkModeProvider>
      </body>
    </html>
  );
}
