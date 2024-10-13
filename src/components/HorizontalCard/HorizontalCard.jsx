"use client";
import Image from "next/image";
import styles from "./HorizontalCard.module.css";
import Button from "../Button/Button";
import { deleteDoc, doc } from "firebase/firestore";
import db from "@/app/lib/firebase.config";
import { useRouter } from "next/navigation";
function HorizontalCard({ card }) {
  const router = useRouter();
  const { id, title, country, createdAt } = card;
  const dateCreated = new Date(createdAt);
  const createdAtString = `${dateCreated.toDateString()}`;
  const deleteItinerary = async (id) => {
    console.log(id);
    try {
      await deleteDoc(doc(db, "itineraries", id));
      router.refresh();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <Image
          src={
            "https://plus.unsplash.com/premium_photo-1694475393287-88027e0fbde4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuYWRhfGVufDB8fDB8fHww"
          }
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 10vw, 33vw"
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <span>{country}</span>
          <p>{title}</p>
        </div>
        <span className={styles.metainfo}>Created at {createdAtString}</span>
      </div>
      <div className={styles.action}>
        <Button
          label={"View"}
          link={`/itineraries/${id}`}
          variant="secondary"
        />
        <Button label={"Edit"} variant="yellow" />
        <Button
          type="button"
          label={"Delete"}
          onClick={() => deleteItinerary(id)}
          variant="red"
        />
      </div>
    </div>
  );
}

export default HorizontalCard;
