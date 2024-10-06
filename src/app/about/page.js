
import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import Footer from "@/components/Footer/Footer";
import SignUpBlock from "@/components/SignUpBlock/SignUpBlock";
import CopyWithHeading from "@/components/CopyWithHeading/CopyWithHeading";
import CardWithIcons from "@/components/CardWithIcons/CardWithIcons";
import Carousel from "@/components/Carousel/Carousel";

import HeroSection from "@/components/HeroSection/HeroSection";
import TwoColumnCopyWithHeading from "@/components/TwoColumnCopyWithHeading/TwoColumnCopyWithHeading";

export default function About() {
  const cardData = [{
    img: "https://plus.unsplash.com/premium_photo-1694475393287-88027e0fbde4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Canada"
  }, {
    img: "https://plus.unsplash.com/premium_photo-1694475393287-88027e0fbde4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Usa"
  }, {
    img: "https://plus.unsplash.com/premium_photo-1694475393287-88027e0fbde4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Canada"
  }]
  return (
    <div className={styles.page}>
   
      <HeroSection aspectRatio="16/4"/>
      <CopyWithHeading
        heading="About TripTailor"
        copy="At TripTailor, we are passionate about travel and technology. Our mission is to provide travelers with a powerful tool to create, customize, and share their journeys. We believe that every trip is unique and deserves to be planned with care and precision."
      />
      <TwoColumnCopyWithHeading
        columnOne={{
          heading: "Our Mission",
          copy: "We aim to provide an intuitive platform that empowers you to craft detailed itineraries with ease. Whether you're adding destinations, planning activities, or sharing your plans, TripTailor makes every step simple and stress-free."
        }}
        columnTwo={{
          heading: "Our Vision",
          copy: "We strive to be the go-to platform for travelers seeking a seamless and personalized planning experience. Our goal is to continuously innovate and improve our tools, making travel planning accessible and delightful for everyone."
        }}
      />


      <SignUpBlock />

    </div>
  );
}
