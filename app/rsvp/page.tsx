import { NextPage } from "next";
import handleRsvp from "./api/rsvp";
import MultiStepForm from "../components/GuestForm";
import Image from "next/image";
import styles from "../styles.module.css";
import background from "../../public/background.jpg";

const RSVP: NextPage = () => {
  return (
    <div className="size-full relative ">
      <div className={styles.bgWrap}>
        <Image
          alt="Background image"
          src={background}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <main
        className={`flex items-center justify-evenly min-h-screen  ${styles.bgText}`}
      >
        <MultiStepForm submitForm={handleRsvp} />
      </main>
    </div>
  );
};

export default RSVP;
