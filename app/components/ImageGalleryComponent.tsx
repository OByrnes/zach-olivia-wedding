"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
type S3Image = { key: string; isPortrait?: boolean; url: string };

function getImageLoader({ src }: { src: string }) {
  return `/api/image-loader?key=${encodeURIComponent(src)}`;
}
function getUniqueArrayOfObjects(arr: S3Image[]) {
  const seenValues = new Set();
  return arr.filter((obj) => {
    const value = obj.key;
    if (seenValues.has(value)) {
      return false;
    }
    seenValues.add(value);
    return true;
  });
}
// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;
export default function S3ImageGallery({
  initialImages,
  initialNextToken,
}: {
  initialImages: S3Image[];
  initialNextToken: string | null;
}) {
  const [images, setImages] = useState<S3Image[]>(initialImages);
  const [nextToken, setNextToken] = useState<string | null>(initialNextToken);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const fetchMore = async () => {
    console.log(nextToken);
    if (!nextToken) return;
    const encodedToken = btoa(nextToken);
    const res = await fetch(`/api/images?continuationToken=${encodedToken}`);
    const data = await res.json();

    setNextToken(data.nextToken);

    setImages((prev) => getUniqueArrayOfObjects([...prev, ...data.images]));
  };

  useEffect(() => {
    if (nextToken) {
      fetchMore();
    }
  }, [inView]);

  return (
    <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-3">
      {images.map((img) => (
        <div
          key={img.key}
          className={`${
            img.isPortrait ? "col-span-1 row-span-2" : "col-span-1"
          } relative max-h-full p-1`}
        >
          <Link
            key={img.key}
            href={`/gallery/${img.key}`}
            className="after:content group relative block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
          >
            <Image
              className="transform brightness-90 transition will-change-auto group-hover:brightness-110"
              src={img.key}
              alt={img.key}
              blurDataURL={rgbDataURL(91, 62, 193)}
              loader={getImageLoader}
              placeholder="blur"
              style={{
                width: "100%",
                height: "auto",
              }}
              width={900}
              height={600}
              sizes="100vw"
            />
          </Link>
        </div>
      ))}
      <div ref={ref} className="h-10 col-span-full">
        {nextToken ? (
          <p>Loading More ...</p>
        ) : (
          <p>You have seen all the images</p>
        )}
      </div>
    </div>
  );
}
