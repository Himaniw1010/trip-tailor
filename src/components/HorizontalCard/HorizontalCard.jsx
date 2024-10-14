"use client";
import Image from "next/image";
import styles from "./HorizontalCard.module.css";
import Button from "../Button/Button";
import { deleteDoc, doc } from "firebase/firestore";
import db from "@/app/lib/firebase.config";
import { useRouter } from "next/navigation";
import useDeviceType from "@/hooks/useDeviceType";
function HorizontalCard({ card }) {
 const deviceType =  useDeviceType();
  const router = useRouter();
  const { id, title, country, createdAt, image } = card;
  const dateCreated = new Date(createdAt);
  const createdAtString = `${dateCreated.toDateString()}`;
  const deleteItinerary = async (id) => {
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
            image
          }
          alt={title}
          objectFit="cover"
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
          size={deviceType == "mobile" ? "sm" : deviceType == "tablet" ? "md" : "lg"}
        />
        <Button label={"Edit"} size={deviceType == "mobile" ? "sm" : deviceType == "tablet" ? "md" : "lg"} link={`/itineraries/${id}/edit`} variant="yellow" />
        <Button
          type="button"
          label={"Delete"}
          size={deviceType == "mobile" ? "sm" : deviceType == "tablet" ? "md" : "lg"}
          onClick={() => deleteItinerary(id)}
          variant="red"
        />
      </div>
    </div>
  );
}

export default HorizontalCard;
