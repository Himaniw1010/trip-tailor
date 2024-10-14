import CardContainer from "@/components/CardContainer/CardContainer";
import styles from "./page.module.css";
import CopyWithHeading from "@/components/CopyWithHeading/CopyWithHeading";
import HeroSection from "@/components/HeroSection/HeroSection";
import { collection, getDocs } from "firebase/firestore";
import db from "../lib/firebase.config";

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
      image:docData.image,
      createdAt: docData.createdAt.toDate().toISOString(), // Convert Firestore timestamp to ISO string
    };
  });

  return {
    data: data,
  };
}

export default async function Page() {
  const { data } = await getData();
  // console.log(data);
  return (
    <div className={styles.page}>
      <HeroSection aspectRatio="16/4" />
      <CopyWithHeading
        heading="Explore all itineraries"
        copy="Our editors at TripTailor have meticulously selected the most enchanting destinations, hotels, and experiences to craft these personalized itineraries."
      />
      <CardContainer type="grid" cards={data} />
    </div>
  );
}
