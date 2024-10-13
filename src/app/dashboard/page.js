
import { collection, getDocs } from "firebase/firestore";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import db from "../lib/firebase.config";
import CardContainer from "@/components/CardContainer/CardContainer";

export default async function Dashboard() {
  const querySnapshot = await getDocs(collection(db, 'itineraries'));
  const data = querySnapshot.docs.map((doc) => 
    {
      const docData = doc.data();
      return {
        id: doc.id,
        title: docData.title,
        country: docData.country,
        userId: docData.userId,
        createdAt: docData.createdAt.toDate().toISOString(), // Convert Firestore timestamp to ISO string
      };
    });
  return (
    <div className={styles.page}>
      <CardContainer heading="Your Itineraries" cards={data} />

    </div>
  );
}
