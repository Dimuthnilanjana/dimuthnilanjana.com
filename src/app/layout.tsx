import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Providers from "@/containers/providers";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-controller";
import LanguageSwitch from "@/components/language-controller";
import Navbar from "@/components/navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"



export const metadata: Metadata = {
  title: "Dimuth Nilanjana | Personal Portfolio",
  description: "Dimuth Nilanjana personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={` bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#07D2FB]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <LanguageSwitch />
          <ThemeSwitch />
        </Providers>
        <SpeedInsights/>
      </body>
    </html>
  );
}
