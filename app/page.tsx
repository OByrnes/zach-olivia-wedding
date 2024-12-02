import Image from "next/image";
import BackgroundImage from "../public/background.jpg";
import Link from "next/link";
import { NavLinks } from "./components/NavLinks";

export default function Home() {
  return (
    <div className="relative size-full min-h-screen">
      <div className="size-full min-h-screen flex bg-gradient-to-b from-deep-cove-50/60 dark:from-deep-cove-950/60 to-deep-cove-200/60 dark:to-deep-cove-800/60 relative md:flex-row md:gap-2 gap-6 flex-col-reverse z-20 md:pl-20 content-evenly md:justify-items-start  items-center justify-evenly">
        <div className="flex flex-wrap w-full justify-items-center justify-center content-start md:w-3/5 z-20 gap-2 md:gap-4">
          <div className="flex w-full justify-center gap-2 grow md:flex-row flex-col flex-wrap items-center ">
            <h1 className="text-4xl md:text-6xl tracking-tight md:tracking-widest  text-justify drop-shadow-lg">
              Zach
            </h1>
            <h3 className="text-2xl md:text-4xl font-bold md:tracking-widest  text-justify drop-shadow-lg">
              and
            </h3>
            <h1 className="text-4xl md:text-6xl tracking-tight md:tracking-widest   col-span-2 text-justify drop-shadow-lg">
              Olivia
            </h1>
          </div>
          <h2 className="text-2xl w-full md:text-8xl  text-center drop-shadow-lg">
            are getting
          </h2>

          <h1 className="text-6xl w-full md:text-8xl tracking-tight md:tracking-wide  text-center drop-shadow-lg">
            Married!
          </h1>
        </div>

        <div className="w-full md:w-1/3 flex-row-reverse h-12 flex md:flex-col justify-center gap-4 items-center mt-10">
          <NavLinks
            href="/rsvp"
            className="bg-deep-cove-950 hover:bg-deep-cove-800  font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-deep-cove-300 transition-all transform hover:scale-105 active:scale-95 animate-bounce-slow"
          >
            RSVP
          </NavLinks>
          <h2 className="tracking-tight md:tracking-wide text-purple-350 text-center drop-shadow-lg">
            We can&apos;t wait to see you!
          </h2>
        </div>
      </div>
      <div className="absolute inset-0 -top-24 z-0 h-full brightness-80">
        <Image
          alt="background  image"
          sizes="100vw"
          // Make the image display full width
          style={{
            width: "100%",
            height: "auto",
          }}
          src={BackgroundImage}
        />
      </div>
    </div>
  );
}
