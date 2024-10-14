"use server"
import { collection, getDocs, query, where } from "firebase/firestore";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import db from "../lib/firebase.config";
import CardContainer from "@/components/CardContainer/CardContainer";
import { getCurrentUser } from "../actions/session";

export default async function Dashboard() {
  const alreadyExistQuery = query(
    collection(db, "itineraries"),
    where("userId", "==", await getCurrentUser())
  );
  const querySnapshot = await getDocs(alreadyExistQuery);
  const data = querySnapshot.docs.map((doc) => {
    const docData = doc.data();
    return {
      id: doc.id,
      title: docData.title,
      country: docData.country,
      userId: docData.userId,
      image:docData.image,
      createdAt: docData.createdAt.toDate().toISOString(), // Convert Firestore timestamp to ISO string
    };
  });
  return (
    <div className={styles.page}>
      <CardContainer heading="Your Itineraries" cards={data} />
    </div>
  );
}
