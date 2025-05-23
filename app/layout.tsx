import { Italiana, Poppins } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.className} ${headingFont.className}`}
    >
      <body>
        <main>
          <Navbar />
          <div className="size-full">{children}</div>
        </main>
      </body>
    </html>
  );
}
