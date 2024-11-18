import { Italiana, Open_Sans, Poppins } from "next/font/google";
import "./globals.css";
import SectionContainer from "@/app/components/SectionContainer";
import { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "./components/Navbar";
import flower_design from "../public/flower_design.png";
import Footer from "./components/Footer";
export const metadata: Metadata = {
  // metadataBase: new URL(siteMetadata.siteUrl),
  title: "Z & O",
  description: "Zach and Olivia's Wedding website",
};

const poppins = Poppins({
  weight: ["100", "200", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-poppins",
});
const headingFont = Italiana({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-header",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${headingFont.variable}`}>
      <body className={`size-full relative`}>
        <main className={`size-full relative`}>
          <Navbar />

          <div className="md:min-h-screen">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
