import Image from "next/image";
import BackgroundImage from "../public/background.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative size-full">
      <div className="size-full flex bg-gradient-to-b from-blue-950/30 to-purple-300/30 relative md:flex-row md:gap-2 gap-6 flex-col-reverse z-20 md:pt-20 md:pl-20 content-evenly md:justify-items-start  items-center justify-evenly">
        <div className="flex flex-wrap w-full justify-items-center justify-center content-center md:w-2/3 z-20 gap-2 md:gap-4">
          <div className="flex w-full grow md:flex-row flex-col flex-wrap items-center ">
            <h1 className="text-4xl md:text-8xl tracking-tight md:tracking-widest text-white text-justify drop-shadow-lg">
              Zach
            </h1>
            <h3 className="text-2xl md:text-4xl font-extrabold text-white text-justify drop-shadow-lg">
              and
            </h3>
            <h1 className="text-4xl md:text-8xl tracking-tight md:tracking-widest  text-white col-span-2 text-justify drop-shadow-lg">
              Olivia
            </h1>
          </div>
          <h2 className="text-2xl w-full md:text-8xl text-white text-center drop-shadow-lg">
            are getting
          </h2>

          <h1 className="text-6xl w-full md:text-8xl tracking-tight md:tracking-wide text-white text-center drop-shadow-lg">
            Married!
          </h1>
        </div>

        <div className=" w-full md:w-1/3 flex-row-reverse h-12 flex md:flex-col justify-center gap-4 items-center mt-10">
          <Link
            href="/rsvp"
            className="bg-blue-950 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all transform hover:scale-105 active:scale-95 animate-bounce-slow"
          >
            RSVP
          </Link>
          <h2 className="tracking-tight md:tracking-wide text-purple-350 text-center drop-shadow-lg">
            We can&apos;t wait to see you!
          </h2>
        </div>
      </div>
      <div className="absolute inset-0 z-0 h-full brightness-80">
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
