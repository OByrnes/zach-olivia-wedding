import Image from "next/image";
import BackgroundImage from "@/app/assets/images/background.jpg";

export default function Home() {
  return (
    <div className="relative size-full min-h-screen">
      <div className="absolute inset-0 -top-24 z-0 h-full brightness-80">
        <Image
          alt="Background Image"
          src={BackgroundImage}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}
