import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import SectionContainer from "@/app/components/SectionContainer";
import Footer from "@/app/components/Footer";
import siteMetadata from "@/data/siteMetadata";
import { ThemeProviders } from "./theme-providers";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  // metadataBase: new URL(siteMetadata.siteUrl),
  title: "Z & O",
  description: "Zach and Olivia's Wedding website",
};

const poppins = Poppins({
  weight: ["500", "200", "900"],
  subsets: ["latin"],
  variable: "--font-space-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={siteMetadata.language}
      className={`${poppins.variable} scroll-smooth`}
    >
      <body className={poppins.className}>
        <ThemeProviders>
          <SectionContainer>
            <div className="font-sans">
              <main className="mb-auto" style={{ minHeight: "90vh" }}>
                <Header />
                {children}
              </main>

              <Footer />
            </div>
          </SectionContainer>
        </ThemeProviders>
      </body>
    </html>
  );
}
