import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Lost from "../public/lost.jpg";
import { NavLinks } from "./components/NavLinks";
const NotFound: NextPage = () => {
  return (
    <div>
      <h1 className="title mb-4 font-bold md:text-2xl">
        You seem to have gotten lost
      </h1>
      <NavLinks
        href="/"
        className="focus:shadow-outline-deep-cove inline rounded-lg border border-transparent bg-deep-cove-300 dark:bg-deep-cove px-4 py-2 text-sm font-medium leading-5  shadow transition-colors duration-150 hover:bg-deep-cove-600 dark:hover:bg-deep-cove-850 focus:outline-none dark:hover:bg-deep-cove-600 dark:hover:bg-deep-cove-850"
      >
        <span>
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
