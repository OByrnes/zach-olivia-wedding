import { Poppins } from "next/font/google";
import SectionContainer from "@/app/components/SectionContainer";
import Footer from "@/app/components/Footer";
import { ReactNode } from "react";
import Header from "./Header";

interface Props {
  children: ReactNode;
}

const poppins = Poppins({ weight: ["500", "200", "900"], subsets: ["latin"] });

const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div
        className={`${poppins.className} flex h-screen flex-col justify-between font-sans`}
      >
        <Header />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;
