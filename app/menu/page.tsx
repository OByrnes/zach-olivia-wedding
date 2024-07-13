import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Menu: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Details</title>
        <meta name="description" content="Details for our wedding" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 py-5">
        <div className="bgWrap">
          <Image
            src="/background.jpg"
            object-fit="cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Zach+O"
            width={700}
            height={475}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <h1 className="text-4xl text-center">Details for Our Wedding</h1>
        <div className="container">
          <h2 className="text-3xl text-center">Venue</h2>
          <p></p>
        </div>

        <div className="container">
          <h2 className="text-3xl text-center">Lodging</h2>
          <p></p>
        </div>
        <div className="container">
          <h2 className="text-3xl text-center">Menu</h2>
          <p></p>
        </div>
        <div className="container">
          <h2 className="text-3xl text-center">Dress Code</h2>
          <p></p>
        </div>
        <div className="container">
          <h2 className="text-3xl text-center">Other</h2>
          <p></p>
        </div>
      </main>
    </div>
  );
};

export default Menu;
