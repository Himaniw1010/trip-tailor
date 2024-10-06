import Image from "next/image";
import styles from "./HeroSection.module.css";

function HeroSection({aspectRatio}) {
  return (
    <div className={styles.wrapper} style={{aspectRatio:aspectRatio}}>
        <Image src="/assets/hero_image.jpg" alt="heroimage"fill objectFit="cover"/>
    </div>
  );
}

export default HeroSection;