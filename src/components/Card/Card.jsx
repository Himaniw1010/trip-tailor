
import Image from "next/image";
import styles from "./Card.module.css";
function Card({ data }) {

  return (
    <div className={styles.wrapper}>
      <Image src={data.img} layout="fill" className={styles.image} />
      <div className={styles.content}>
        <span>Plans for</span>
        <p>
          {data.country}
        </p>
      </div>
    </div>
  );
}

export default Card;
