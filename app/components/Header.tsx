import headerNavLinks from "@/data/headerLinks";
import siteMetadata from "@/data/siteMetadata";
import MobileNav from "./MobileNav";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
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
      </div>

      <div className="nav-links">
        {headerNavLinks
          .filter((link) => link.href !== "/")
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium  hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400
              sm:block"
            >
              {link.title}
            </Link>
          ))}

        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
