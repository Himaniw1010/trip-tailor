import Image from "next/image";
import styles from "./HeroSection.module.css";

function HeroSection({aspectRatio}) {
  return (
    <div className={styles.wrapper} style={{aspectRatio:aspectRatio}}>
        <Image src="/assets/hero_image.jpg" fill objectFit="cover"/>
    </div>
  );
}

export default HeroSection;