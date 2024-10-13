
import Image from "next/image";
import styles from "./ItineraryContent.module.css";
function ItineraryContent({country, title, description}) {

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <span className={styles.countryName}>{country}</span>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default ItineraryContent;
