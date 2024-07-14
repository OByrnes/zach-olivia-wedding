import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const NotFound: NextPage = () => {
  return (
    <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="bg-wrap">
        <Image
          src="/lost.jpg"
          object-fit="cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="lost"
          width={700}
          height={475}
          style={{
            width: "100%",
            height: "auto",
          }}
        />

        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          You have gotten lost
        </p>
        <Link
          href="/"
          className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500"
        >
          Back to Main Page
        </Link>
      </div>

      <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
        404
      </h1>
    </div>
  );
};
export default NotFound;
