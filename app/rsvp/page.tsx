import { NextPage } from "next";
import handleRsvp from "./api/rsvp";
import MultiStepForm from "../components/GuestForm";
import Image from "next/image";
import styles from "../styles.module.css";
import background from "../../public/background.jpg";
import { Button } from "@headlessui/react";
import Link from "next/link";

const RSVP: NextPage = () => {
  return (
    <div className="size-full relative ">
      <div className={styles.bgWrap}>
        <Image
          alt="Background image"
          src={background}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <div
        className={`flex md:flex-row justify-evenly align-start flex-col-reverse md:justify-evenly pt-12 min-h-screen  ${styles.bgText}`}
      >
        <div className="md:w-1/3 h-12 flex flex-col justify-center md:gap-4 items-center md:mt-10">
          <h2 className="tracking-tight md:tracking-wide text-purple-350 text-center drop-shadow-lg">
            Already responded? Need to change dietary requirements or group
            size?
          </h2>
          <Link
            href="/search"
            className="bg-blue-950 hover:bg-blue-800 text-white font-bold md:py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all transform hover:scale-105 active:scale-95 animate-bounce-slow"
          >
            Edit your RSVP
          </Link>
        </div>
        <div>
          <h1 className="text-2xl w-full md:text-4xl text-white text-center drop-shadow-lg">
            Let us know if you can make it!
          </h1>
          <MultiStepForm submitForm={handleRsvp} />
        </div>
      </div>
    </div>
  );
};

export default RSVP;
