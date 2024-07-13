import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Gallery: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Gallery</title>
        <meta name="description" content="Gallery for our wedding" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 py-5"></main>
    </div>
  );
};

export default Gallery;
