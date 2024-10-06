import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import Footer from "@/components/Footer/Footer";
import SignUpBlock from "@/components/SignUpBlock/SignUpBlock";
import CopyWithHeading from "@/components/CopyWithHeading/CopyWithHeading";
import CardWithIcons from "@/components/CardWithIcons/CardWithIcons";
import Carousel from "@/components/Carousel/Carousel";

import HeroSection from "@/components/HeroSection/HeroSection";
import TwoColumnCopyWithHeading from "@/components/TwoColumnCopyWithHeading/TwoColumnCopyWithHeading";
import Button from "@/components/Button/Button";

export default function About() {
  const cardData = [
    {
      img: "https://plus.unsplash.com/premium_photo-1694475393287-88027e0fbde4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      country: "Canada",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1694475393287-88027e0fbde4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      country: "Usa",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1694475393287-88027e0fbde4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      country: "Canada",
    },
  ];
  return (
    <div className={styles.page}>
      <Button type="primary" size="md" label={"Create"} link="/add-itinerary" />
    </div>
  );
}
