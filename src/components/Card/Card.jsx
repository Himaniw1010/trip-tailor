import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";
function Card({ data }) {
  return (
    <div className={styles.wrapper}>
      <Link href={`itineraries/${data.id}`}>
        <Image
          src={
            "https://images.unsplash.com/photo-1519941970202-b1883164af02?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291bnRyeXxlbnwwfHwwfHx8MA%3D%3D"
          }
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
