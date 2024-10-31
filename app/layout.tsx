import { Open_Sans, Poppins } from "next/font/google";
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
const open_sans = Open_Sans({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-open-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${open_sans.variable} h-full bg-blue-950`}
    >
      <body className={`h-full relative`}>
        <div className="h-dvh">
          <Navbar />

          <main>
            <div className="mx-auto max-w-full">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
