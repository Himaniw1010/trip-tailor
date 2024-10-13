
import styles from "./page.module.css";
import CopyWithHeading from "@/components/CopyWithHeading/CopyWithHeading";

import HeroSection from "@/components/HeroSection/HeroSection";

export default function About() {

  return (
    <div className={styles.page}>
      <HeroSection aspectRatio="16/4"/>
      <CopyWithHeading
        heading="Explore all itineraries"
        copy="Our editors at TripTailor have meticulously selected the most enchanting destinations, hotels, and experiences to craft these personalized itineraries."
      />
    </div>
  );
}
