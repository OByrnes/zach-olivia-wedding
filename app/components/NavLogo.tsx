import styles from "./theme-image.module.css";
import Image, { ImageProps, StaticImageData } from "next/image";

type Props = Omit<ImageProps, "src" | "priority" | "loading"> & {
  srcLight: StaticImageData;
  srcDark: StaticImageData;
};

export const NavbarLogo = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className={styles.imgLight} alt="logo" />
      <Image {...rest} src={srcDark} className={styles.imgDark} alt="logo" />
    </>
  );
};
