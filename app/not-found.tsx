import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Lost from "@/app/assets/images/lost.jpg";
import { NavLinks } from "./components/NavLinks";
import { Fragment } from "react";
const NotFound: NextPage = () => {
  return (
    <div className="flex flex-col">
      <h1 className="title mb-4 w-full text-center font-bold md:text-2xl">
        You seem to have gotten lost
      </h1>
      <NavLinks
        href="/"
        className="bg-deep-cove-950 hover:bg-deep-cove-800  text-deep-cove-100  font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-deep-cove-300 transition-all transform hover:scale-105 active:scale-95 animate-bounce-slow"
      >
        <span className="flex justify-evenly w-full md:w-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Go back to main page
        </span>
      </NavLinks>
      <Image className="w-full" alt="lost-Kalia" src={Lost} />
    </div>
  );
};
export default NotFound;
