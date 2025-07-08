import Head from "next/head";
import "./globals.scss";
import logodark from "../../public/logo-dark.svg";
import {Montserrat, Poppins} from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const title = "Irwan Hermawan | Mobile Developer";
const description =
  "Irwan Hermawan is a passionate Mobile Developer specializing in Android Kotlin and Multiplatform using KMP or Flutter. Based in Jakarta, Indonesia. Hire Irwan for Mobile App Development";
const url = "https://irwan-hermawan.vercel.app/";

export const metadata = {
  title: title,
  description: description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
    <Head>
      <script
          dangerouslySetInnerHTML={{
            __html: `
        try {
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
        } catch (_) {}
      `,
          }}
      />
      <meta name="theme-color" content="#0e0e0e"/>
      <meta name="msapplication-navbutton-color" content="#0e0e0e"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="#0e0e0e"/>

      <title>{title}</title>

      <meta name="description" content={description}/>

      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      <meta property="og:image" content={logodark}/>
      <meta property="og:url" content={url}/>

      <meta name="twitter:title" content={title}/>
      <meta name="twitter:description" content={description}/>
      <meta name="twitter:image" content={logodark}/>
      <meta name="twitter:card" content={logodark}/>

    </Head>
    <body className={poppins.className}>{children}</body>
    </html>
  );
}
