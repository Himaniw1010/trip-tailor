
import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import Footer from "@/components/Footer/Footer";
import SignUpBlock from "@/components/SignUpBlock/SignUpBlock";
import CopyWithHeading from "@/components/CopyWithHeading/CopyWithHeading";
import CardWithIcons from "@/components/CardWithIcons/CardWithIcons";
import Carousel from "@/components/Carousel/Carousel";
import Card from "@/components/Card/Card";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  const cardData = [{
    img: "https://plus.unsplash.com/premium_photo-1694475393287-88027e0fbde4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Uganda"
  }, {
    img: "https://plus.unsplash.com/premium_photo-1694475393287-88027e0fbde4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Usa"
  }, {
    img: "https://plus.unsplash.com/premium_photo-1694475393287-88027e0fbde4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Canada"
  }, {
    img: "https://plus.unsplash.com/premium_photo-1694475393287-88027e0fbde4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Usa"
  }]
  return (
    <div className={styles.page}>
      <HeroSection />
      <CopyWithHeading
        heading="Welcome to TripTailor!"
        copy="Unleash the full potential of your travel experiences with TripTailor, the ultimate travel itinerary planner designed to make your trips effortless and unforgettable. Whether you’re planning a solo adventure, a family vacation, or a group getaway, TripTailor is here to help you every step of the way."
      />
      <CardWithIcons heading="Why TripTailor?" />
      <Carousel heading="Destinations" slides={cardData} />
      <SignUpBlock />
    </div>
  );
}
