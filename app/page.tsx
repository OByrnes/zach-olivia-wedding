import Image from "next/image";
import headerNavLinks from "@/data/headerLinks";
import Card from "./components/Card";
import Link from "next/link";
import BackgroundImage from "./components/BackgroundImage";

export default function Home() {
  return (
    <main>
      <BackgroundImage path="background.jpg">
        <div className="card-grid">
          {headerNavLinks.slice(1).map((ele) => (
            <Link
              key={ele.title}
              href={ele.href}
              className="card"
              style={{ backgroundImage: `url(${ele.src})` }}
            >
              <div className="card-content">
                <h3>{ele.title}</h3>
                <p>{ele.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </BackgroundImage>
    </main>
  );
}
