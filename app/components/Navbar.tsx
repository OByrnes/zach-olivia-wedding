import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header
      style={{ height: "100px" }}
      className="text-ltlavender w-full bg-darkblue"
    >
      <div className="box-size pl-4 grid h-full w-full align-center items-center">
        <Link href="/" className="text-3xl">
          <Image
            src="/2.png"
            object-fit="cover"
            sizes="(max-width: 768px) 100px, (max-width: 1200px) 75, 50px"
            alt="Zach+O"
            width={100}
            height={100}
            style={{
              height: "auto",
            }}
          />{" "}
        </Link>
        <nav className="flex h-full">
          <Link
            className="font-extralight hover:font-bold flex items-center px-8 h-full hover:bg-lavender hover:underline"
            href="/details"
          >
            <span className="inline-block align-baseline">Details</span>
          </Link>
          <Link
            className="font-extralight hover:font-bold flex items-center px-8 h-full hover:bg-lavender hover:underline"
            href="/rsvp"
          >
            <span className="inline-block align-baseline">RSVP</span>
          </Link>
          <Link
            className="font-extralight hover:font-bold flex items-center px-8 h-full hover:bg-lavender hover:underline"
            href="/gallery"
          >
            <span className="inline-block align-baseline">Gallery</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};
