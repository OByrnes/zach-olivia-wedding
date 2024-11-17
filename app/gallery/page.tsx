import { NextPage } from "next";
import gal1 from "@/public/gal1.jpg";
import gal2 from "@/public/gal2.jpg";
import gal3 from "@/public/gal3.jpg";
import gal4 from "@/public/gal4.jpg";
import gal5 from "@/public/gal5.jpg";
import gal6 from "@/public/gal6.jpg";
import gal7 from "@/public/gal7.jpg";
import gal8 from "@/public/gal8.jpg";
import gal9 from "@/public/gal9.jpg";
import gal10 from "@/public/gal10.jpg";
import gal11 from "@/public/gal11.jpg";

import Image from "next/image";

const Gallery: NextPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h2 className="text-2xl md:text-1xl py-4">
        Please come to this link after the wedding to see the wedding photos
      </h2>
      <h4>Until then, check these goofy photos out</h4>
      <div className="w-full grid grid-flow-col grid-cols-3 grid-rows-3 gap-2">
        <div style={{ position: "relative", height: "400px" }}>
          <Image
            alt="Background image"
            src={gal1}
            placeholder="blur"
            fill
            sizes="(min-width: 608px) 50vw, 100vw"
            style={{
              objectFit: "cover", // cover, contain, none
            }}
          />
        </div>

        <div style={{ position: "relative", height: "400px" }}>
          <Image
            alt="Background image"
            src={gal2}
            placeholder="blur"
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "cover", // cover, contain, none
            }}
          />{" "}
        </div>
        <div style={{ position: "relative", height: "400px" }}>
          <Image
            alt="Background image"
            src={gal3}
            placeholder="blur"
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "cover", // cover, contain, none
            }}
          />{" "}
        </div>
        <div style={{ position: "relative", height: "400px" }}>
          <Image
            alt="Background image"
            src={gal4}
            placeholder="blur"
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "cover", // cover, contain, none
            }}
          />{" "}
        </div>
        <div style={{ position: "relative", height: "400px" }}>
          <Image
            alt="Background image"
            src={gal5}
            placeholder="blur"
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "cover", // cover, contain, none
            }}
          />{" "}
        </div>
        <div style={{ position: "relative", height: "400px" }}>
          <Image
            alt="Background image"
            src={gal6}
            placeholder="blur"
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "cover", // cover, contain, none
            }}
          />{" "}
        </div>
        <div style={{ position: "relative", height: "400px" }}>
          <Image
            alt="Background image"
            src={gal7}
            placeholder="blur"
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "cover", // cover, contain, none
            }}
          />{" "}
        </div>
        <div style={{ position: "relative", height: "400px" }}>
          <Image
            alt="Background image"
            src={gal8}
            placeholder="blur"
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "cover", // cover, contain, none
            }}
          />{" "}
        </div>
        <div style={{ position: "relative", height: "400px" }}>
          <Image
            alt="Background image"
            src={gal9}
            placeholder="blur"
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "cover", // cover, contain, none
            }}
          />{" "}
        </div>
        <div style={{ position: "relative", height: "400px" }}>
          <Image
            alt="Background image"
            src={gal10}
            placeholder="blur"
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "cover", // cover, contain, none
            }}
          />{" "}
        </div>
        <div style={{ position: "relative", height: "400px" }}>
          <Image
            alt="Background image"
            src={gal11}
            placeholder="blur"
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "cover", // cover, contain, none
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
