import Image from "next/image";
import styles from "./HeroSection.module.css";

function HeroSection({imageUrl, aspectRatio}) {
  const imageUri = imageUrl ? imageUrl : "/assets/hero_image.jpg";
  return (
    <div className={styles.wrapper} style={{aspectRatio:aspectRatio}}>
        <Image src={imageUri} alt="heroimage"fill objectFit="cover"/>
    </div>
  );
}

export default HeroSection;