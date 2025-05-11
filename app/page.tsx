import Link from "next/link";
import GalleryImage from "./components/GalleryImage";

export default function Home() {
  return (
    <div className="relative mt-26 size-full min-h-screen">
      <div className="fixed z-40 top-44 left-6">
        <h1 className=" text-deep-cove-100 text-5xl">WE GOT MARRIED!!!!</h1>
        <Link className="text-deep-cove-50" href="/gallery">
          View the photos
        </Link>
      </div>
      <div className="fixed z-40 top-72 right-6">
        <h1 className=" text-deep-cove-100 text-5xl">Thank you!</h1>
      </div>
      <GalleryImage
        key="4550742_0165.JPG"
        s3Key="4550742_0165.JPG"
        objectFit="cover"
      />

      <GalleryImage
        key="4550742_0135.JPG"
        s3Key="4550742_0135.JPG"
        objectFit="cover"
      />
      <GalleryImage
        key="nonwedding/1747000754462-Thank.png"
        s3Key="nonwedding/1747000754462-Thank.png"
        objectFit="contain"
      />
    </div>
  );
}
