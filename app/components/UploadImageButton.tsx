"use client";

import Link from "next/link";
import { useRef, useState } from "react";

export default function UploadImageForm({
  onSuccess,
}: {
  onSuccess?: () => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [newImages, setNewImages] = useState<
    { isPortrait: Boolean; key: string }[]
  >([]);
  const handleUpload = async () => {
    const files = fileInputRef.current?.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    const formData = new FormData();

    for (const file of files) {
      // Detect layout using an offscreen image
      const img = document.createElement("img");
      img.src = URL.createObjectURL(file);
      await new Promise((res) => (img.onload = res));

      const layout =
        img.naturalHeight > img.naturalWidth ? "portrait" : "landscape";
      formData.append("file", file);
      formData.append(`layout-${file.name}`, layout);
    }

    const response = await fetch("/api/images", {
      method: "POST",
      body: formData,
    });

    fileInputRef.current!.value = ""; // clear
    setUploading(false);
    onSuccess?.();
    if (response.ok) {
      const new_images = await response.json();
      setNewImages((prev) => [...prev, ...new_images]);
    }
  };

  //   bg-deep-cove-200 dark:bg-deep-cove-950

  return (
    <div className="p-4 flex ">
      <div className="flex flex-col flex-wrap w-1/2">
        <h3>Do you have any photos from the wedding?</h3>
        <h4>Please add them to the gallery</h4>
      </div>
      <div className="flex flex-row flex-wrap align-middle">
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          multiple
          className="block content-center text-sm dark:text-white text-deep-cove-950
        file:mr-4 file:py-2 file:px-4 file:rounded-md
        file:border-0 file:text-sm file:font-semibold
        file:bg-deep-cove-300 file:dark:bg-deep-cove-200  file:h
        hover:file:bg-deep-cove-600"
        />
        <button
          onClick={handleUpload}
          className="ml-2 px-4 py-2 bg-deep-cove-600 dark:bg-deep-cove-200 text-white rounded disabled:bg-slate-500"
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </div>
      {newImages
        ? newImages.map((img) => (
            <Link key={img.key} href={`/gallery/${img.key}`}>
              {img.key}
            </Link>
          ))
        : null}
    </div>
  );
}
