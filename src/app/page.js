import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import Footer from "@/components/Footer/Footer";
import SignUpBlock from "@/components/SignUpBlock/SignUpBlock";
import CopyWithHeading from "@/components/CopyWithHeading/CopyWithHeading";
import CardWithIcons from "@/components/CardWithIcons/CardWithIcons";
import Carousel from "@/components/Carousel/Carousel";
import Card from "@/components/Card/Card";
import HeroSection from "@/components/HeroSection/HeroSection";
import { collection, getDocs } from "firebase/firestore";
import db from "./lib/firebase.config";

async function getData() {
  const querySnapshot = await getDocs(collection(db, "itineraries"));

  const data = querySnapshot.docs.map((doc) => {
    const docData = doc.data();
    return {
      id: doc.id,
      days: docData.days,
      title: docData.title,
      country: docData.country,
      description: docData.description,
      userId: docData.userId,
      createdAt: docData.createdAt.toDate().toISOString(), // Convert Firestore timestamp to ISO string
    };
  });

  return {
    data: data,
  };
}

export default async function Home() {
  const { data } = await getData();
  return (
    <div className={styles.page}>
      <HeroSection />
      <CopyWithHeading
        heading="Welcome to TripTailor!"
        copy="Unleash the full potential of your travel experiences with TripTailor, the ultimate travel itinerary planner designed to make your trips effortless and unforgettable. Whether you’re planning a solo adventure, a family vacation, or a group getaway, TripTailor is here to help you every step of the way."
      />
      <CardWithIcons heading="Why TripTailor?" />
      <Carousel heading="Destinations" slides={data} />
      <SignUpBlock />
    </div>
  );
}
