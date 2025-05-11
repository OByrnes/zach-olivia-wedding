"use client";
import Image from "next/image";

function getImageLoader({ src }: { src: string }) {
  return `/api/image-loader?key=${encodeURIComponent(src)}`;
}
export default function GalleryImage({ s3Key }: { s3Key: string }) {
  return (
    <div className="mt-28 h-screen">
      <div className="w-full max-h-full h-5/6 relative">
        <Image
          loader={getImageLoader}
          src={s3Key}
          alt="S3 image"
          fill
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
}
