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
import gal12 from "@/public/gal12.jpg";
import gal13 from "@/public/gal13.jpg";
import gal14 from "@/public/gal14.jpg";
import gal15 from "@/public/gal15.jpg";
import gal16 from "@/public/gal16.jpg";
import gal17 from "@/public/gal17.jpg";
import gal18 from "@/public/gal18.jpg";
import gal19 from "@/public/gal19.jpg";
import gal20 from "@/public/gal20.jpg";
import gal22 from "@/public/gal22.jpg";
import gal23 from "@/public/gal23.jpg";
import gal24 from "@/public/gal24.jpg";
import gal25 from "@/public/gal25.jpg";
import galspoon from "@/public/galspoon.jpg";
import gal21 from "@/public/gal21.jpg";
import galkalia from "@/public/galkalia.jpg";
import galkid from "@/public/galkid.jpg";
import galkid1 from "@/public/galkid2.jpg";
import galkid2 from "@/public/galkid3.jpg";
import galkid3 from "@/public/galkid4.jpg";
import galkid4 from "@/public/galkid5.jpg";
import galkid5 from "@/public/galkid6.jpg";
import galkid6 from "@/public/galkid7.jpg";

import Image, { StaticImageData } from "next/image";

const Gallery: NextPage = () => {
  const images: { classNames: string; src: StaticImageData }[] = [
    {
      classNames: "min-h-136 h-136 md:min-h-136 md:h-136",
      src: gal13,
    },
    {
      classNames: "min-h-136 h-136 md:min-h-136 md:h-136",
      src: gal6,
    },
    {
      classNames: "min-h-136 h-136 md:min-h-136 md:h-136",
      src: gal11,
    },
    // Row 1
    {
      classNames: "min-h-136 h-136 md:min-h-136 md:h-136 md:sm:col-span-2",
      src: gal3,
    },
    {
      classNames: "min-h-136 h-136 md:min-h-136 md:h-136",
      src: gal10,
    },
    // Row 2
    {
      classNames: "min-h-136 h-136 md:min-h-136 md:h-136",
      src: gal18,
    },
    {
      classNames: "min-h-136 h-136 md:min-h-136 md:h-136 md:col-span-2",
      src: gal1,
    },
    {
      // Row 3
      classNames: "min-h-136 h-136 md:min-h-136 md:h-136 sm:col-span-2",
      src: gal17,
    },
    {
      classNames: "min-h-136 h-136 md:min-h-136 md:h-136",
      src: gal12,
    },

    // Row 4
    {
      classNames: "min-h-136 h-136 md:min-h-136 md:h-136",
      src: gal19,
    },
    {
      classNames: "min-h-136 h-136 md:min-h-136 md:h-136",
      src: gal2,
    },
    {
      classNames: "min-h-136 h-136 md:min-h-136 md:h-136",
      src: gal4,
    },
    // Row 5

    {
      classNames: "min-h-136 h-136 md:min-h-136 md:h-136",
      src: gal10,
    },
    {
      classNames: "min-h-136 h-136 md:min-h-136 md:h-136 md:sm:col-span-2",
      src: gal9,
    },
    // Row 6
    {
      classNames: "min-h-136 h-136 md:min-h-136 md:h-136",
      src: gal5,
    },
    {
      classNames: "min-h-136 h-136 md:min-h-136 md:h-136",
      src: gal8,
    },

    {
      classNames: "min-h-136 h-136 md:min-h-136 md:h-136",
      src: gal7,
    },
    // Row 7
    {
      classNames: "min-h-136 h-136 md:min-h-136 md:h-136",
      src: gal16,
    },
    {
      classNames: "min-h-136 h-136 md:min-h-136 md:h-136 sm:col-span-2",
      src: gal21,
    },
    // Row 8
    {
      classNames: "min-h-136 h-136 md:min-h-136 md:h-136 sm:col-span-2",
      src: gal23,
    },
    {
      classNames: "min-h-136 h-136 md:min-h-136 md:h-136",
      src: gal14,
    },
    // Row 9

    {
      classNames:
        "min-h-136 h-136 md:min-h-136 md:h-136 sm:col-span-2 md:col-span-3",
      src: gal24,
    },
    // Row 10
    {
      classNames: "min-h-136 h-136 md:min-h-136 md:h-136 md:col-span2",
      src: gal15,
    },
    {
      classNames: "min-h-136 h-136 md:min-h-136 md:h-136",
      src: gal20,
    },
    // row
    {
      classNames: "min-h-136 h-136 md:min-h-136 md:h-136 sm:col-span-2",
      src: gal25,
    },

    //  Kid Stuff
    {
      classNames: "min-h-136 h-136 md:min-h-136 md:h-136 sm:col-span-2",
      src: galkid3,
    },
    {
      classNames: "min-h-136 h-136 md:min-h-136 md:h-136",
      src: galkid4,
    },
    // Row Kid 1
    {
      classNames: "min-h-136 h-136 md:min-h-136 md:h-136",
      src: galkid5,
    },
    {
      classNames: "min-h-136 h-136 md:min-h-136 md:h-136 sm:col-span-2",
      src: galkid6,
    },

    // Row Kid 2
    {
      classNames: "min-h-164 h-164 md:min-h-164 md:h-164",
      src: galkid1,
    },
    {
      classNames: "min-h-164 h-164 md:min-h-164 md:h-164",
      src: galkid,
    },
    {
      classNames: "min-h-164 h-164 md:min-h-164 md:h-164",
      src: galkid2,
    },
    // Row kid 3
    {
      classNames: "min-h-136 h-136 md:min-h-136 md:h-136 sm:col-span-2",
      src: galkalia,
    },
    {
      classNames: "min-h-136 h-136 md:min-h-136 md:h-136",
      src: galspoon,
    },
  ];
  return (
    <div className="px-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Image Gallery</h1>
      <h2 className="text-xl md:text-xl mb-4 text-center">
        Please come to this link after the wedding to see the wedding photos
      </h2>
      <h4 className="text-xl md:text-xl mb-4 text-center">
        Until then, check these goofy photos out
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
        {images.map((img, index) => (
          <div
            key={index}
            className={`${img.classNames} w-full min-h-136 h-136 md:min-h-136 md:h-136 block relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300`}
          >
            <Image
              src={img.src}
              sizes="300px"
              fill
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-auto  relative object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
