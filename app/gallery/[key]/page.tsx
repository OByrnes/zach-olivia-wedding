import GalleryImage from "@/app/components/GalleryImage";

export default async function Background({
  params,
}: {
  params: Promise<{ key: string }>;
}) {
  const { key } = await params;
  return (
    <div className="mt-28 h-screen">
      <GalleryImage s3Key={key} />
    </div>
  );
}
