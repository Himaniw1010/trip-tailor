
import Image from "next/image";
import styles from "./HorizontalCard.module.css";
import Button from "../Button/Button";
function HorizontalCard({ card }) {
  const { id, title, country, createdAt } = card
  const dateCreated = new Date(createdAt);
  const createdAtString = `${dateCreated.toDateString()}`

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <Image src={"https://plus.unsplash.com/premium_photo-1694475393287-88027e0fbde4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuYWRhfGVufDB8fDB8fHww"} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 10vw, 33vw" className={styles.image} />
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <span>{country}</span>
          <p>
            {title}
          </p>
        </div>
        <span className={styles.metainfo}>Created at {createdAtString}</span>
      </div>
      <div className={styles.action}>
        <Button label={"View"} link={`/itineraries/${id}`} variant="secondary"/>
        <Button label={"Edit"} variant="yellow"/>
        <Button label={"Delete"} variant="red"/>
      </div>
    </div>
  );
}

export default HorizontalCard;
