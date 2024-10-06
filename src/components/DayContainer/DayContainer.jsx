"use client";
import styles from "./DayContainer.module.css";


export default function DayContainer({n}) {
  console.log(n)
  return (
    <div className={styles.wrapper}>
      <fieldset className={styles.fieldset}>
        <legend>Day {n}:</legend>
      </fieldset>
    </div>
  );
}
