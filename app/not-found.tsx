import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Lost from "../public/lost.jpg";
const NotFound: NextPage = () => {
  return (
    <div>
      <h1 className="title mb-4 font-bold md:text-2xl">
        You seem to have gotten lost
      </h1>
      <Link
        href="/"
        className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-950 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-850 focus:outline-none dark:hover:bg-blue-850"
      >
        &#8592; Back to Main Page
      </Link>
      <Image className="w-full" alt="lost-Kalia" src={Lost} />
    </div>
  );
};
export default NotFound;
