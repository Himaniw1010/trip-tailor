import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";
function Card({ data }) {
  console.log(data)
  return (
    <div className={styles.wrapper}>
      <Link href={`itineraries/${data.id}`}>
        <Image
          src={
            data.image
          }
          alt={data.title}
          layout="fill"
          className={styles.image}
        />
        <div className={styles.content}>
          <span>{data.country}</span>
          <p>{data.title}</p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
