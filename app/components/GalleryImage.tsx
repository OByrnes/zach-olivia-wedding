"use client";
import Image from "next/image";

function getImageLoader({ src }: { src: string }) {
  return `/api/image-loader?key=${encodeURIComponent(src)}`;
}
export default function GalleryImage({
  s3Key,
  objectFit,
  objectPosition,
  margin,
}: {
  s3Key: string;
  objectFit?: "contain" | "cover";
  objectPosition?: string;
  margin?: boolean;
}) {
  return (
    <div className="w-full max-h-full h-5/6 relative">
      <Image
        loader={getImageLoader}
        src={s3Key}
        alt="S3 image"
        fill
        sizes="100vw"
        style={{
          objectFit: objectFit ? objectFit : "contain",
          objectPosition: objectPosition ? objectPosition : "center",
        }}
      />
    </div>
  );
}
