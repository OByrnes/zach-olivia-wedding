import { fetchS3Images } from "@/app/lib/fetchS3Images";
import S3ImageGallery from "@/app/components/ImageGalleryComponent";
import UploadImageForm from "../components/UploadImageButton";

export default async function HomePage() {
  const { images, nextToken } = await fetchS3Images();

  return (
    <div className="mt-28 flex-col">
      <div className="flex-col">
        <h1 className="text-2xl font-bold mb-4 text-center">Image Gallery</h1>
        <h2 className="text-xl md:text-xl mb-4 text-center">
          Here are the wedding photos
        </h2>
        <h4 className="text-xl md:text-xl mb-4 text-center">
          Please download any you like or send me (Olivia) an email and I can
          send you a physical copy
        </h4>

        <UploadImageForm />
      </div>
      <S3ImageGallery initialImages={images} initialNextToken={nextToken} />
    </div>
  );
}
