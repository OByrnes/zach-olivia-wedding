import Image from "next/image";
import headerNavLinks from "@/data/headerLinks";
import Card from "./components/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen relative flex-col items-center justify-between ">
      <div className="bgWrap">
        <Image
          src="/background.jpg"
          object-fit="cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="Zach+O"
          width={700}
          height={475}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>

      <div className="flex flex-wrap items-center justify-center mt-6">
        {headerNavLinks.map(
          (ele: {
            title: string;
            description: string;
            href: string;
            src: string;
          }) => (
            <Card
              key={ele.title}
              imgSrc={ele.src}
              href={ele.href}
              title={ele.title}
              description={ele.description}
            />
          )
        )}
      </div>
    </main>
  );
}
