// "use server"
import db from "@/app/lib/firebase.config";
import styles from "./page.module.css";
// import { useRouter } from 'next/router'
import HeroSection from "@/components/HeroSection/HeroSection";
import ItineraryContent from "@/components/ItineraryContent/ItineraryContent";
import { collection, documentId, getDoc, getDocs, limit, query, where } from "firebase/firestore";
import TabsContainer from "@/components/TabsContainer/TabsContainer";

async function getData(slug) {
  const alreadyExistQuery = query(
    collection(db, "itineraries"),
    where(documentId(), "==", slug), limit(1)
  );
  const querySnapshot = await getDocs(alreadyExistQuery);

  const data = querySnapshot.docs.map((doc) => {
    const docData = doc.data();
    return {
      id: doc.id,
      days: docData.days,
      title: docData.title,
      country: docData.country,
      description:docData.description,
      userId: docData.userId,
      createdAt: docData.createdAt.toDate().toISOString(), // Convert Firestore timestamp to ISO string
    };
  });

  return {
    data: data[0]
  }
}

export default async function About({ params }) {
  const {data} = await getData(params.slug)
  console.log(data)
  return (
    <div className={styles.page}>
      <HeroSection aspectRatio="16/3" />
      <ItineraryContent title={data.title} country={data.country} description={data.description}/>
      <TabsContainer days={data.days} />
    </div>
  );
}
